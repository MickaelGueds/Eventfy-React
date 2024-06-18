import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import Renova from '../../../assets/Renova.webp';
import Include from '../../../assets/Include.webp';
import Educa from '../../../assets/Educa.webp';

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
              <h2>Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente</h2>
              <p><i className="far fa-calendar-alt"></i> 15 de julho de 2024</p>
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
                <p>Nesta palestra, vamos explorar como as tecnologias modernas estão sendo utilizadas para a educação ambiental e a preservação do meio ambiente. Abordaremos o uso de sensores, drones, e sistemas de monitoramento remoto para rastrear mudanças ambientais e coletar dados críticos. Discutiremos também o papel das tecnologias de informação e comunicação (TIC) na educação e sensibilização ambiental. Os participantes conhecerão projetos inovadores e ferramentas que estão ajudando a proteger e preservar o nosso planeta, promovendo um maior envolvimento da comunidade na conservação ambiental.</p>
              </div>
            </div>
            <div className="event-image">
              <img src={Educa} alt="Imagem do Evento" />
            </div>
          </section>
          <section className="related-events">
            <h2>Eventos relacionados a Sustentabilidade e Responsabilidade Social</h2>
            <div className="related-events-container">
              <div className="related-event">
                <Link to='/Include'>
                  <img src={Include} alt="A Importância da Inclusão Digital e Acessibilidade" />
                  <p>A Importância da Inclusão Digital e Acessibilidade</p>
                </Link>
              </div>
              <div className="related-event">
                <Link to='/Renova'>
                  <img src={Renova} alt="Inovações em Energias Renováveis e Sustentabilidade" />
                  <p>Inovações em Energias Renováveis e Sustentabilidade</p>
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
