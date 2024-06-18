import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import Gestao from '../../../assets/Gestao.webp';
import Entre from '../../../assets/Entre.webp';
import Comu from '../../../assets/Comu.webp';

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
              <h2>Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia</h2>
              <p><i className="far fa-calendar-alt"></i> 20 de julho de 2024</p>
              <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
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
                <p>Este workshop é projetado para ajudar profissionais e estudantes a se prepararem eficazmente para entrevistas de emprego no setor de tecnologia. Serão abordadas estratégias para a elaboração de currículos e cartas de apresentação, técnicas para responder perguntas comuns e específicas de entrevistas técnicas, e a importância de pesquisas prévias sobre as empresas. Também discutiremos a preparação para testes técnicos e dinâmicas de grupo. Ao final, os participantes estarão melhor equipados para enfrentar processos seletivos com confiança e competência.</p>
              </div>
            </div>
            <div className="event-image">
              <img src={Entre} alt="Imagem do Evento" />
            </div>
          </section>
          <section className="related-events">
            <h2>Eventos relacionados a Desenvolvimento Pessoal e Carreira</h2>
            <div className="related-events-container">
              <div className="related-event">
                <Link to='/Gestao'>
                  <img src={Gestao} alt="Gestão de Tempo e Produtividade Pessoal" />
                  <p>Gestão de Tempo e Produtividade Pessoal</p>
                </Link>
              </div>
              <div className="related-event">
                <Link to='/Comu'>
                  <img src={Comu} alt="Técnicas de Comunicação Eficaz no Ambiente de Trabalho" />
                  <p>Técnicas de Comunicação Eficaz no Ambiente de Trabalho</p>
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
