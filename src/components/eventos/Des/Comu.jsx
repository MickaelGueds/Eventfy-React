import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header'
import { Link } from 'react-router-dom';
import Gestao from '../../../assets/Gestao.webp'
import Entre from '../../../assets/Entre.webp'
import Comu from '../../../assets/Comu.webp'





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
            <h2>Técnicas de Comunicação Eficaz no Ambiente de Trabalho</h2>
            <p><i className="far fa-calendar-alt"></i> 19 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Nesta palestra, exploraremos as melhores práticas e técnicas para uma comunicação eficaz no ambiente de trabalho. Abordaremos a importância da clareza e concisão na transmissão de informações, a escuta ativa, e as estratégias para dar e receber feedback construtivo. Além disso, discutiremos como adaptar a comunicação para diferentes públicos e situações, incluindo reuniões presenciais e virtuais. Os participantes aprenderão como melhorar suas habilidades de comunicação para promover um ambiente colaborativo e produtivo.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={Comu} alt="Imagem do Evento" />
          </div>
        </section>
        <section className="related-events">
          <h2>Eventos relacionados a Desenvolvimento Pessoal e Carreira</h2>
          <div className="related-events-container">
            <div className="related-event">
              <Link to='/Entre'>
                
                  <img src={Entre} alt="Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia" />
                  
                  <p>Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia</p>
                
              </Link>
            </div>
            <div className="related-event">
            
              <Link to= '/Gestao'>
                <img src={Gestao} alt="Gestão de Tempo e Produtividade Pessoal" />
                <p>Gestão de Tempo e Produtividade Pessoal</p>
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