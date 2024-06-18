import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import ReactImg from '../../../assets/React.webp';
import IA from '../../../assets/IA.webp';
import Blockchain from '../../../assets/Blockchain.webp';

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
              <h2>Desenvolvimento de Aplicações Web com React</h2>
              <p><i className="far fa-calendar-alt"></i> 8 de julho de 2024</p>
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
                <p>Nesta palestra, você aprenderá a construir aplicações web modernas e dinâmicas utilizando o React, uma das bibliotecas mais populares para desenvolvimento front-end. Serão abordados conceitos fundamentais como componentes, estado e propriedades, além de técnicas avançadas como o uso de hooks e gerenciamento de estado com Redux. Também discutiremos as melhores práticas para organização de código, testes e otimização de desempenho. Ao final, os participantes terão uma compreensão sólida de como criar aplicações web escaláveis e eficientes.</p>
              </div>
            </div>
            <div className="event-image">
              <img src={ReactImg} alt="Imagem do Evento" />
            </div>
          </section>
          <section className="related-events">
            <h2>Eventos relacionados a Tecnologia e Inovação</h2>
            <div className="related-events-container">
              <div className="related-event">
                <Link to='/IA'>
                  <img src={IA} alt="Inteligência Artificial e Machine Learning para Iniciantes" />
                  <p>Inteligência Artificial e Machine Learning para Iniciantes</p>
                </Link>
              </div>
              <div className="related-event">
                <Link to='/Blockchain'>
                  <img src={Blockchain} alt="Blockchain e Criptomoedas: O Futuro das Transações Digitais" />
                  <p>Blockchain e Criptomoedas: O Futuro das Transações Digitais</p>
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
