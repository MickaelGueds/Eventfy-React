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
            <h2>Blockchain e Criptomoedas: O Futuro das Transações Digitais</h2>
            <p><i className="far fa-calendar-alt"></i> 11 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Nesta palestra, mergulharemos no mundo das tecnologias blockchain e criptomoedas, explorando seu impacto transformador nas finanças e em outros setores. Começaremos com uma introdução ao funcionamento do blockchain e à criação de moedas digitais como Bitcoin e Ethereum. Discutiremos a segurança, a descentralização e os casos de uso práticos dessas tecnologias. Além disso, abordaremos o futuro das transações digitais e como a blockchain pode remodelar a economia global. Os participantes sairão com uma compreensão clara dos benefícios e desafios associados a essas tecnologias emergentes.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={Blockchain} alt="Imagem do Evento" />
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
             
              <Link to= '/React'>
                <img src={React} alt="Desenvolvimento de Aplicações Web com React" />
                <p>Desenvolvimento de Aplicações Web com React</p>
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