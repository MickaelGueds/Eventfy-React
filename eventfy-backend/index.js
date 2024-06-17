const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
//parte de cadastros

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
// parte de login


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
// aqui é a parte de eventos


app.post('/cadastro', (req, res) => {
    const { nome_evento, data, local, ingressos_disponiveis, ingressos_comprados } = req.body;

    console.log('Received data:', req.body);

    if (!nome_evento || !data || !local || !ingressos_disponiveis || !ingressos_comprados) {
        console.error('Missing fields');
        return res.status(400).send('All fields are required');
    }

    const checkQuery = 'SELECT * FROM eventos WHERE nome = ?';
    db.query(checkQuery, [nome_evento], (checkErr, checkResults) => {
        if (checkErr) {
            console.error('Error checking event name:', checkErr.sqlMessage);
            return res.status(500).send('Error checking event name: ' + checkErr.sqlMessage);
        }

        if (checkResults.length > 0) {
            console.error('Event name already exists');
            return res.status(400).send('Event name already exists');
        }

        const insertQuery = 'INSERT INTO eventos (nome_evento, data, localizacao, ingressos_disponiveis, ingressos_vendidos) VALUES (?, ?, ?, ?, ?)';
        const values = [nome_evento, data, local, ingressos_disponiveis, ingressos_comprados];

        db.query(insertQuery, values, (insertErr, insertResults) => {
            if (insertErr) {
                console.error('Error inserting data into the database:', insertErr.sqlMessage);
                return res.status(500).send('Error inserting data: ' + insertErr.sqlMessage);
            }

            console.log('Data inserted successfully');
            res.status(200).send('Event registered successfully');
        });
    });
});



const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


