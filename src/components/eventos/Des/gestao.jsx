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
            <h2>Gestão de Tempo e Produtividade Pessoal</h2>
            <p><i className="far fa-calendar-alt"></i> 16 de julho de 2024</p>
            <p><i className="fas fa-map-marker-alt"></i>Teatro G3 Telecom - Teresina/PI</p>
            <button className="buy-ticket">INSCREVA-SE AQUI</button>
            <button className="show-details" onClick={toggleDetails}>VER MAIS DETALHES</button>
            <div id="event-details-more" className="event-details-more" style={{ display: showDetails ? 'block' : 'none' }}>
              <p>Nesta palestra, vamos explorar métodos e ferramentas para a gestão eficaz do tempo e aumento da produtividade pessoal. Abordaremos técnicas como a matriz de Eisenhower, o método Pomodoro, e a importância de definir prioridades e metas claras. Além disso, discutiremos como lidar com procrastinação, distrações e como criar um ambiente de trabalho mais eficiente. Os participantes aprenderão a organizar suas tarefas de maneira a maximizar a eficiência e alcançar um equilíbrio melhor entre vida pessoal e profissional.</p>
            </div>
          </div>
          <div className="event-image">
            <img src={Gestao} alt="Imagem do Evento" />
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
             
              <Link to= '/Comu'>
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