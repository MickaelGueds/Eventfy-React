const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('Starting server...');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lofc1701',
    database: 'eventify'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Parte de cadastros
app.post('/cadastro', (req, res) => {
    const { username, telefone, usercpf, usercep, estado, cidade, userrua, numero, useremail, password } = req.body;

    console.log('Received data:', req.body);

    if (!username || !telefone || !usercpf || !usercep || !estado || !cidade || !userrua || !numero || !useremail || !password) {
        console.error('Missing fields');
        return res.status(400).send('All fields are required');
    }

    const checkQuery = 'SELECT cpf FROM usuarios WHERE cpf = ?';
    db.query(checkQuery, [usercpf], (checkErr, checkResults) => {
        if (checkErr) {
            console.error('Error checking CPF:', checkErr.sqlMessage);
            return res.status(500).send(`Error checking CPF: ${checkErr.sqlMessage}`);
        }

        if (checkResults.length > 0) {
            console.error('CPF already exists');
            return res.status(400).send('CPF already exists');
        }

        const insertQuery = 'INSERT INTO usuarios (nome, email, senha, telefone, cpf, cep, estado, cidade, rua, number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [username, useremail, password, telefone, usercpf, usercep, estado, cidade, userrua, numero];

        db.query(insertQuery, values, (insertErr, insertResults) => {
            if (insertErr) {
                console.error('Error inserting data into the database:', insertErr.sqlMessage);
                return res.status(500).send(`Error inserting data: ${insertErr.sqlMessage}`);
            }
            console.log('Data inserted successfully');
            res.status(200).send('User registered successfully');
        });
    });
});

// Parte de login
app.post('/login', (req, res) => {
    const { useremail, password } = req.body;

    if (!useremail || !password) {
        return res.status(400).send('Email and password are required');
    }

    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [useremail, password], (err, results) => {
        if (err) {
            console.error('Error checking user credentials:', err.sqlMessage);
            return res.status(500).send('Error checking user credentials');
        }

        if (results.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});

// Parte de eventos com URL da imagem
app.post('/criar', (req, res) => {
    console.log('POST /criar endpoint hit');
    const { nome_evento, descricao, localizacao, data, horario, ingressos_disponiveis, categoria, imagem_url } = req.body;

    console.log('Received data:', req.body);

    if (!nome_evento || !descricao || !localizacao || !data || !horario || !ingressos_disponiveis || !categoria) {
        console.error('Missing fields');
        return res.status(400).send('All fields except image are required');
    }

    const checkQuery = 'SELECT * FROM eventos WHERE nome_evento = ?';
    console.log('Executing check query:', checkQuery);
    db.query(checkQuery, [nome_evento], (checkErr, checkResults) => {
        if (checkErr) {
            console.error('Error checking event name:', checkErr.sqlMessage);
            return res.status(500).send('Error checking event name: ' + checkErr.sqlMessage);
        }

        if (checkResults.length > 0) {
            console.error('Event name already exists');
            return res.status(400).send('Event name already exists');
        }

        const insertQuery = 'INSERT INTO eventos (nome_evento, descricao, localizacao, data, horario, ingressos_disponiveis, ingressos_vendidos, categoria, imagem_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nome_evento, descricao, localizacao, data, horario, ingressos_disponiveis, 0, categoria, imagem_url];

        console.log('Executing insert query:', insertQuery, 'with values:', values);
        db.query(insertQuery, values, (insertErr, insertResults) => {
            if (insertErr) {
                console.error('Error inserting data into the database:', insertErr.sqlMessage);
                return res.status(500).send('Error inserting data: ' + insertErr.sqlMessage);
            }

            let categoryFolder;
            switch (categoria) {
                case 'Desenvolvimento Pessoal e Carreira':
                    categoryFolder = path.join(__dirname, '../src/components/eventos/Des');
                    break;
                case 'Tecnologia e Inovação':
                    categoryFolder = path.join(__dirname, '../src/components/eventos/tecno');
                    break;
                case 'Sustentabilidade e Responsabilidade Social':
                    categoryFolder = path.join(__dirname, '../src/components/eventos/Sust');
                    break;
                case 'Cultura e Expressão Artística':
                    categoryFolder = path.join(__dirname, '../src/components/eventos/Cult');
                    break;
                default:
                    categoryFolder = path.join(__dirname, '../src/components/eventos/Other');
            }

            console.log('__dirname:', __dirname);
            console.log('Category folder:', categoryFolder);

            try {
                console.log('Attempting to create directory:', categoryFolder);
                if (!fs.existsSync(categoryFolder)) {
                    fs.mkdirSync(categoryFolder, { recursive: true });
                    console.log('Directory created:', categoryFolder);
                } else {
                    console.log('Directory already exists:', categoryFolder);
                }
            } catch (err) {
                console.error('Error creating directory:', err);
                return res.status(500).send('Error creating directory: ' + err.message);
            }

            const filePath = path.join(categoryFolder, `${nome_evento.replace(/\s+/g, '_')}.jsx`);
            console.log('Creating file:', filePath);

            const jsxTemplate = `
                import { useState } from 'react';
                import '../Evento.css';
                import Header from '../../Header';
                import { Link } from 'react-router-dom';
                import Fest from '../../../assets/Fest.webp';
                import Urban from '../../../assets/Urban.webp';
                import Lite from '../../../assets/Lite.webp';

                const Evento = () => {
                    const [showDetails, setShowDetails] = useState(false);

                    const toggleDetails = () => {
                        setShowDetails(!showDetails);
                    };
                    
                    return (
                        <div> 
                            <Header/>
                            <div> 
                                <main>
                                    <div className="blur-background"></div>
                                    <section className="event-banner">
                                        <div className="event-details">
                                            <h2>${nome_evento}</h2>
                                            <p><i className="far fa-calendar-alt"></i> ${data}</p>
                                            <p><i className="fas fa-map-marker-alt"></i>${localizacao}</p>
                                            <button className="buy-ticket">INSCREVA-SE AQUI</button>
                                            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
                                            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
                                                <p>${descricao}</p>
                                            </div>
                                        </div>
                                        ${imagem_url ? `<div className="event-image"><img src="${imagem_url}" alt="Imagem do Evento" /></div>` : ''}
                                    </section>
                                    <section className="related-events">
                                        <h2>Eventos relacionados a ${categoria}</h2>
                                        <div className="related-events-container">
                                            <div className="related-event">
                                                <Link to='/Lite'>
                                                    <img src={Lite} alt="Encontro de Literatura e Performance Poética" />
                                                    <p> Encontro de Literatura e Performance Poética</p>
                                                </Link>
                                            </div>
                                            <div className="related-event">
                                                <Link to= '/Urban'>
                                                    <img src={Urban} alt=" Workshop de Arte Urbana: Grafite e Street Art" />
                                                    <p>Workshop de Arte Urbana: Grafite e Street Art</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </div>
                        </div>
                    );
                };

                export default Evento;
            `;

            try {
                fs.writeFileSync(filePath, jsxTemplate);
                console.log('File created successfully:', filePath);
                res.status(200).send('Event registered and file created successfully');
            } catch (err) {
                console.error('Error creating file:', err);
                res.status(500).send('Error creating file: ' + err.message);
            }
        });
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
