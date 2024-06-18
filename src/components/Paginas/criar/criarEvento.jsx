import React, { useState } from 'react';
import styles from './event.module.css';
import Header from '../PáginaDes/Desenvolvedor/HeaderDesenvolvedor/HeaderDesenvolvedor';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [ticket, setTicket] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = {
            nome_evento: title,
            descricao: description,
            localizacao: location,
            data: date,
            horario: time,
            ingressos_disponiveis: ticket,
            categoria: category,
            imagem_url: imageUrl
        };

        try {
            const response = await fetch('http://localhost:5001/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to create event');
            }

            console.log(result);
            alert('Evento criado com sucesso!');
        } catch (error) {
            console.error('Error:', error);
            alert('Erro ao criar o evento: ' + error.message);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.bodyEvento}>
                <form className={styles.formEvento} onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.labelEvento}>Título:</label>
                        <input
                            type="text"
                            className={styles.inputEvento}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Descrição:</label>
                        <textarea
                            className={styles.textareaEvento}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Localização:</label>
                        <input
                            type="text"
                            className={styles.inputEvento}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Data:</label>
                        <input
                            type="date"
                            className={styles.inputEvento}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Horário:</label>
                        <input
                            type="time"
                            className={styles.inputEvento}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Ingressos Disponíveis:</label>
                        <input
                            type="number"
                            className={styles.inputEvento}
                            value={ticket}
                            onChange={(e) => setTicket(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.labelEvento}>Categoria:</label>
                        <select
                            className={styles.selectEvento}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Desenvolvimento Pessoal e Carreira">Desenvolvimento Pessoal e Carreira</option>
                            <option value="Tecnologia e Inovação">Tecnologia e Inovação</option>
                            <option value="Sustentabilidade e Responsabilidade Social">Sustentabilidade e Responsabilidade Social</option>
                            <option value="Cultura e Expressão Artística">Cultura e Expressão Artística</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.labelEvento}>URL da Imagem:</label>
                        <input
                            type="text"
                            className={styles.inputEvento}
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button className={styles.submitButtonEvento} type="submit">Criar Evento</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
