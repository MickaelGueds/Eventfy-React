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
              <h2>A Importância da Inclusão Digital e Acessibilidade</h2>
              <p><i className="far fa-calendar-alt"></i> 13 de julho de 2024</p>
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
                <p>Este workshop destaca a importância da inclusão digital e da acessibilidade na era moderna. Abordaremos as barreiras enfrentadas por pessoas com deficiência e outros grupos marginalizados no acesso às tecnologias. Discutiremos as melhores práticas e normas para a criação de conteúdo digital acessível, incluindo design inclusivo e ferramentas de apoio. Além disso, exploraremos casos de sucesso e iniciativas que promovem a inclusão digital em diferentes setores. Os participantes sairão com uma compreensão clara de como contribuir para um ambiente digital mais inclusivo e acessível para todos.</p>
              </div>
            </div>
            <div className="event-image">
              <img src={Include} alt="Imagem do Evento" />
            </div>
          </section>
          <section className="related-events">
            <h2>Eventos relacionados a Sustentabilidade e Responsabilidade Social</h2>
            <div className="related-events-container">
              <div className="related-event">
                <Link to='/Renova'>
                  <img src={Renova} alt="Inovações em Energias Renováveis e Sustentabilidade" />
                  <p>Inovações em Energias Renováveis e Sustentabilidade</p>
                </Link>
              </div>
              <div className="related-event">
                <Link to='/Educa'>
                  <img src={Educa} alt="Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente" />
                  <p>Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente</p>
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
