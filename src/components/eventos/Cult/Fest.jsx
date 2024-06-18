import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import Fest from '../../../assets/Fest.webp';
import Urban from '../../../assets/Urban.webp';
import Lite from '../../../assets/Lite.webp';

const Evento = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isInscrito, setIsInscrito] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleInscricao = () => {
    setIsInscrito(true);
    console.log('Inscrição confirmada');
  };

  return (
    <div>
      <Header />
      <div>
        <main>
          <div className="blur-background"></div>
          <section className="event-banner">
            <div className="event-details">
              <h2>Festival de Cinema Independente e Arte Experimental</h2>
              <p><i className="far fa-calendar-alt"></i> 4 de julho de 2024</p>
              <p><i className="fas fa-map-marker-alt"></i> Teatro G3 Telecom - Teresina/PI</p>
              <button
                className={`buy-ticket ${isInscrito ? 'inscrito' : ''}`}
                onClick={handleInscricao}
                disabled={isInscrito}
              >
                {isInscrito ? 'Inscrito' : 'INSCREVA-SE AQUI'}
              </button>
              {isInscrito && <p className="confirmation-message">Inscrição confirmada!</p>}
              <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
              <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
                <p>O Festival de Cinema Independente e Arte Experimental celebra a criatividade e a inovação no mundo cinematográfico. Durante três dias, serão exibidos curtas e longas-metragens de cineastas independentes de todo o mundo. Além das exibições, haverá painéis de discussão com diretores, roteiristas e críticos de cinema, abordando temas como a produção independente, financiamento de filmes e a evolução da arte cinematográfica. O evento também contará com oficinas práticas sobre técnicas de filmagem e edição, proporcionando aos participantes uma imersão completa no universo do cinema independente.</p>
              </div>
            </div>
            <div className="event-image">
              <img src={Fest} alt="Imagem do Evento" />
            </div>
          </section>
          <section className="related-events">
            <h2>Eventos relacionados a Cultura e Expressão Artística</h2>
            <div className="related-events-container">
              <div className="related-event">
                <Link to='/Lite'>
                  <img src={Lite} alt="Encontro de Literatura e Performance Poética" />
                  <p> Encontro de Literatura e Performance Poética</p>
                </Link>
              </div>
              <div className="related-event">
                <Link to='/Urban'>
                  <img src={Urban} alt="Workshop de Arte Urbana: Grafite e Street Art" />
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
