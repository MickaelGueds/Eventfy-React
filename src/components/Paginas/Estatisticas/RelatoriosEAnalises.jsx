import React from 'react';
import './RelatoriosEAnalises.css';

const RelatoriosEAnalises = () => {
  return (
    <div className="relatorios-e-analises">
      <h1>Relatórios e Análises</h1>
      <section className="relatorios">
        <h2>Relatórios</h2>
        <ul>
          <li>
            <h3>Evento 1</h3>
            <p>Número de inscrições: 100</p>
            <p>Taxa de participação: 80%</p>
          </li>
          <li>
            <h3>Evento 2</h3>
            <p>Número de inscrições: 50</p>
            <p>Taxa de participação: 60%</p>
          </li>
          {/* Add more event reports here */}
        </ul>
      </section>
      <section className="analises">
        <h2>Análises</h2>
        <ul>
          <li>
            <h3>Feedback dos participantes</h3>
            <p>Evento 1: 4.5/5</p>
            <p>Evento 2: 4.2/5</p>
          </li>
          {/* Add more analysis here */}
        </ul>
      </section>
    </div>
  );
};

export default RelatoriosEAnalises;