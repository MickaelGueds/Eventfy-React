import { useState } from 'react';
import '../Evento.css';
import Header from '../../Header'
import { Link } from 'react-router-dom';
import Fest from '../../../assets/Fest.webp'
import Urban from '../../../assets/Urban.webp'
import Lite from '../../../assets/Lite.webp'





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
            <h2>Workshop de Arte Urbana: Grafite e Street Art</h2>
            <p><i className="far fa-calendar-alt"></i>31 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Este workshop intensivo de dois dias é dedicado aos entusiastas e praticantes da arte urbana. Artistas renomados compartilharão suas experiências e técnicas em grafite e street art, desde a concepção de um mural até a aplicação de diferentes materiais e estilos. Os participantes terão a oportunidade de criar suas próprias obras sob a orientação dos artistas, explorando a expressão criativa em espaços públicos. Além das atividades práticas, haverá debates sobre a legalidade, ética e impacto social da arte urbana nas cidades modernas.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={Urban} alt="Imagem do Evento" />
          </div>
        </section>
        <section className="related-events">
          <h2>Eventos relacionados a Cultura e Expressão Artística</h2>
          <div className="related-events-container">
            <div className="related-event">
              <Link to='/Lite'>
                
                  <img src={Lite} alt="Encontro de Literatura e Performance Poética" />
                  
                  <p>Encontro de Literatura e Performance Poética</p>
                
              </Link>
            </div>
            <div className="related-event">
            
              <Link to= '/Fest'>
                <img src={Fest} alt=" Festival de Cinema Independente e Arte Experimental" />
                <p>Festival de Cinema Independente e Arte Experimental</p>
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