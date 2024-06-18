// src/Home.js
import React from 'react';
import styles from './Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Foto1 from '../../assets/Foto1.jpg';
import Foto2 from '../../assets/Foto2.jpg';
import Foto3 from '../../assets/Foto3.jpg';
import Foto4 from '../../assets/Foto4.jpg';
import Header from '../Header';
import Reactf from '../../assets/React.webp';
import Blockchain from '../../assets/Blockchain.webp';
import IA from '../../assets/IA.webp';
import Educa from '../../assets/Educa.webp';
import Entre from '../../assets/Entre.webp';
import Comu from '../../assets/Comu.webp';
import Gestao from '../../assets/Gestao.webp';
import Include from '../../assets/Include.webp';
import Renova from '../../assets/Renova.webp';
import Fest from '../../assets/Fest.webp';
import Urban from '../../assets/Urban.webp';
import Lite from '../../assets/Lite.webp';
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer'; 

function Home() {
  const data = [
    { id: '1', image: Foto1 },
    { id: '2', image: Foto2 },
    { id: '3', image: Foto3 },
    { id: '4', image: Foto4 },
  ];

  const categories = [
    {
      title: 'Desenvolvimento Pessoal e Carreira',
      events: [
        { id: 1, name: 'Gestão de Tempo e Produtividade Pessoal', imageUrl: Gestao, link: '/Gestao' },
        { id: 2, name: 'Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia', imageUrl: Entre, link: '/Entre' },
        { id: 3, name: 'Técnicas de Comunicação Eficaz no Ambiente de Trabalho', imageUrl: Comu, link: '/Comu' },
      ],
    },
    {
      title: 'Tecnologia e Inovação',
      events: [
        { id: 1, name: 'Inteligência Artificial e Machine Learning para Iniciantes', imageUrl: IA, link: '/IA' },
        { id: 2, name: 'Blockchain e Criptomoedas: O Futuro das Transações Digitais', imageUrl: Blockchain, link: '/Blockchain' },
        { id: 3, name: 'Desenvolvimento de Aplicações Web com React', imageUrl: Reactf, link: '/React' },
      ],
    },
    {
      title: 'Sustentabilidade e Responsabilidade Social',
      events: [
        { id: 1, name: 'Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente', imageUrl: Educa, link: '/Educa' },
        { id: 2, name: 'A Importância da Inclusão Digital e Acessibilidade', imageUrl: Include, link: '/Include' },
        { id: 3, name: 'Inovações em Energias Renováveis e Sustentabilidade', imageUrl: Renova, link: '/Renova' },
      ],
    },
    {
      title: 'Cultura e Expressão Artística',
      events: [
        { id: 1, name: 'Festival de Cinema Independente e Arte Experimental', imageUrl: Fest, link: '/Fest' },
        { id: 2, name: 'Workshop de Arte Urbana: Grafite e Street Art', imageUrl: Urban, link: '/Include' },
        { id: 3, name: 'Encontro de Literatura e Performance Poética', imageUrl: Lite, link: '/Lite' },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>EVENTOS</h1>

        <Swiper
          modules={[EffectCoverflow]}
          effect='coverflow'
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className={styles['slide-item']} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h1 className={styles['section-title']}>CATEGORIAS DE EVENTOS</h1>

        {categories.map((category, index) => (
          <section key={index} className={styles['event-category']}>
            <h2 className={styles['category-title']}>{category.title}</h2>
            <div className={styles['event-list']}>
              {category.events.map(event => (
                <a key={event.id} href={event.link} className={styles['event-item']}>
                  <img src={event.imageUrl} alt={event.name} className={styles['event-image']} />
                  <p className={styles['event-name']}>{event.name}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
        <div className={styles.feedbackButtonContainer}>
          <Link to="/feedback" className={styles.feedbackButton}>Deixe seu Feedback</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

