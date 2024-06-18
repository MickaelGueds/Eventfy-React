import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header'; // Import Header and use it in the import statement
import './EventPage.css';

const EventPage = () => {
    const { nome_evento } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Nome do evento na URL:', nome_evento);
        fetch(`http://localhost:5001/eventos/${nome_evento}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setEvent(data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching event details: ' + error.message);
                setLoading(false);
            });
    }, [nome_evento]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Header />
            {event && (
                <div className="event-details-container">
                    <main>
                        <div className="blur-background"></div>
                        <section className="event-banner">
                            <div className="event-details">
                                <h2>{event.nome_evento}</h2>
                                <p><i className="far fa-calendar-alt"></i> {event.data}</p>
                                <p><i className="fas fa-map-marker-alt"></i> {event.localizacao}</p>
                                <button className="buy-ticket">INSCREVA-SE AQUI</button>
                                <button className="show-details">VER MAIS DETALHES</button>
                                <div id="event-details-more" className="event-details-more">
                                    <p>{event.descricao}</p>
                                </div>
                            </div>
                            {event.imagem_url && (
                                <div className="event-image">
                                    <img src={event.imagem_url} alt={event.nome_evento} />
                                </div>
                            )}
                        </section>
                        <section className="related-events">
                            <h2>Eventos relacionados a {event.categoria}</h2>
                            <div className="related-events-container">
                                {/* Render related events here if applicable */}
                            </div>
                        </section>
                    </main>
                </div>
            )}
        </div>
    );
}

export default EventPage;