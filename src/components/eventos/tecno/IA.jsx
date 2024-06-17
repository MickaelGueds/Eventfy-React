import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header'
import { Link } from 'react-router-dom';
import React from '../../../assets/React.webp' 
import IA from '../../../assets/IA.webp'
import Blockchain from '../../../assets/Blockchain.webp'





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
            <h2>Inteligência Artificial e Machine Learning para Iniciantes</h2>
            <p><i className="far fa-calendar-alt"></i> 10 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Este workshop introdutório foi desenhado para aqueles que desejam entrar no mundo da Inteligência Artificial (IA) e Machine Learning (ML). Iniciaremos com uma visão geral dos conceitos básicos de IA e ML, incluindo algoritmos comuns como regressão linear e árvores de decisão. Em seguida, exploraremos as ferramentas e bibliotecas mais utilizadas, como TensorFlow e scikit-learn. Os participantes terão a oportunidade de desenvolver modelos simples e aprender a avaliar sua eficácia. Este evento é ideal para quem quer dar os primeiros passos nessa área inovadora e de rápido crescimento.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={IA} alt="Imagem do Evento" />
          </div>
        </section>
        <section className="related-events">
          <h2>Eventos relacionados a Tecnologia e Inovação</h2>
          <div className="related-events-container">
            <div className="related-event">
              <Link to='/React'>
                
                  <img src={React} alt="Evento 1" />
                  
                  <p>Desenvolvimento de Aplicações Web com React</p>
                
              </Link>
            </div>
            <div className="related-event">
            
              <Link to= '/Blockchain'>
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