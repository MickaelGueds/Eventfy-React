import React from 'react';
import { FaCalendarPlus, FaUsers, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './DesenvolvedorHome.module.css';
import HeaderDesenvolvedor from '../Desenvolvedor/HeaderDesenvolvedor/HeaderDesenvolvedor';

const Principal = () => {
    return (
        <div>
            <HeaderDesenvolvedor />
            <div className={styles.container}>
                <h1 className={styles.title}>Página do Organizador</h1>
                <div className={styles.options}>
                    <Link to="/criar" className={styles.option}>
                        <FaCalendarPlus className={styles.icon} />
                        <h2>Criar Evento</h2>
                    </Link>
                    <Link to="/GestaoDeParticipantes" className={styles.option}>
                        <FaUsers className={styles.icon} />
                        <h2>Gestão de participantes</h2>
                    </Link>
                    <Link to="/estatisticas" className={styles.option}>
                        <FaChartBar className={styles.icon} />
                        <h2>Estatísticas</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Principal;
