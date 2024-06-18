
                import { useState } from 'react';
                import '../Evento.css';
                import Header from '../../Header';
                import { Link } from 'react-router-dom';

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
                                            <h2>testefinal</h2>
                                            <p><i className="far fa-calendar-alt"></i> 0101-10-10</p>
                                            <p><i className="fas fa-map-marker-alt"></i>aaaa</p>
                                            <button className="buy-ticket">INSCREVA-SE AQUI</button>
                                            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
                                            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
                                                <p>aaaa</p>
                                            </div>
                                        </div>
                                        <div className="event-image"><img src="https://extra.globo.com/incoming/25585437-2ba-2e9/w533h800/whatsapp-image-2022-10-06-at-11.47.54.jpeg.jpg" alt="Imagem do Evento" /></div>
                                    </section>
                                    <section className="related-events">
                                        <h2>Eventos relacionados a Sustentabilidade e Responsabilidade Social</h2>
                                        <div className="related-events-container">
                                            <div className="related-event">
                                                <Link to='/Lite'>
                                                    <img src="URL_DA_IMAGEM_LITE" alt="Encontro de Literatura e Performance Poética" />
                                                    <p> Encontro de Literatura e Performance Poética</p>
                                                </Link>
                                            </div>
                                            <div className="related-event">
                                                <Link to='/Urban'>
                                                    <img src="URL_DA_IMAGEM_URBAN" alt=" Workshop de Arte Urbana: Grafite e Street Art" />
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
            