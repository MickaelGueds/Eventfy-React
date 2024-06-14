import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header'
import { Link } from 'react-router-dom';
import Renova from '../../../assets/Renova.webp' 
import Include from '../../../assets/Include.webp'
import Educa from '../../../assets/Educa.webp'





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
            <h2>Inovações em Energias Renováveis e Sustentabilidade</h2>
            <p><i className="far fa-calendar-alt"></i> 9 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teresina Hall - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Nesta palestra, exploraremos as mais recentes inovações no campo das energias renováveis e sua importância para a sustentabilidade global. Abordaremos tecnologias emergentes em energia solar, eólica, biomassa e outras fontes alternativas. Discutiremos também os desafios e oportunidades na implementação dessas tecnologias, bem como os impactos ambientais e econômicos. Os participantes aprenderão sobre projetos inovadores que estão liderando a transição para um futuro mais sustentável e como essas inovações podem ser aplicadas em diferentes contextos.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={Renova} alt="Imagem do Evento" />
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
             
              <Link to= '/Educa'>
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