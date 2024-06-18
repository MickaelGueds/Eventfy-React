import React, { useState } from 'react';
import './gestao.css'
import Header from '../PáginaDes/Desenvolvedor/HeaderDesenvolvedor/HeaderDesenvolvedor';

const eventos = [
  { id: 1, nome: 'Gestão de Tempo e Produtividade Pessoal' },
  { id: 2, nome: 'Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia' },
  { id: 3, nome: 'Técnicas de Comunicação Eficaz no Ambiente de Trabalho' },
  { id: 4, nome: 'Inteligência Artificial e Machine Learning para Iniciantes' },
  { id: 5, nome: 'Blockchain e Criptomoedas: O Futuro das Transações Digitais' },
  { id: 6, nome: 'Desenvolvimento de Aplicações Web com React' },
  { id: 7, nome: 'Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente' },
  { id: 8, nome: 'A Importância da Inclusão Digital e Acessibilidade' },
  { id: 9, nome: 'Inovações em Energias Renováveis e Sustentabilidade' },
  { id: 10, nome: 'Festival de Cinema Independente e Arte Experimental' },
  { id: 11, nome: 'Workshop de Arte Urbana: Grafite e Street Art' },
  { id: 12, nome: 'Encontro de Literatura e Performance Poética' },
];

const participantesPorEvento = {
  1: [
    { id: 1, nome: 'Participante 1', email: 'participante1@example.com', status: 'pendente' },
    { id: 2, nome: 'Participante 2', email: 'participante2@example.com', status: 'pendente' },
  ],
  2: [
    { id: 3, nome: 'Participante 3', email: 'participante3@example.com', status: 'pendente' },
    { id: 4, nome: 'Participante 4', email: 'participante4@example.com', status: 'pendente' },
  ],
  3: [
    { id: 5, nome: 'Participante 5', email: 'participante5@example.com', status: 'pendente' },
    { id: 6, nome: 'Participante 6', email: 'participante6@example.com', status: 'pendente' },
  ],
  4: [
    { id: 7, nome: 'Participante 7', email: 'participante7@example.com', status: 'pendente' },
    { id: 8, nome: 'Participante 8', email: 'participante8@example.com', status: 'pendente' },
  ],
  5: [
    { id: 9, nome: 'Participante 9', email: 'participante9@example.com', status: 'pendente' },
    { id: 10, nome: 'Participante 10', email: 'participante10@example.com', status: 'pendente' },
  ],
  6: [
    { id: 11, nome: 'Participante 11', email: 'participante11@example.com', status: 'pendente' },
    { id: 12, nome: 'Participante 12', email: 'participante12@example.com', status: 'pendente' },
  ],
  7: [
    { id: 13, nome: 'Participante 13', email: 'participante13@example.com', status: 'pendente' },
    { id: 14, nome: 'Participante 14', email: 'participante14@example.com', status: 'pendente' },
  ],
  8: [
    { id: 15, nome: 'Participante 15', email: 'participante15@example.com', status: 'pendente' },
    { id: 16, nome: 'Participante 16', email: 'participante16@example.com', status: 'pendente' },
  ],
  9: [
    { id: 17, nome: 'Participante 17', email: 'participante17@example.com', status: 'pendente' },
    { id: 18, nome: 'Participante 18', email: 'participante18@example.com', status: 'pendente' },
  ],
  10: [
    { id: 19, nome: 'Participante 19', email: 'participante19@example.com', status: 'pendente' },
    { id: 20, nome: 'Participante 20', email: 'participante20@example.com', status: 'pendente' },
  ],
  11: [
    { id: 21, nome: 'Participante 21', email: 'participante21@example.com', status: 'pendente' },
    { id: 22, nome: 'Participante 22', email: 'participante22@example.com', status: 'pendente' },
  ],
  12: [
    { id: 23, nome: 'Participante 23', email: 'participante23@example.com', status: 'pendente' },
    { id: 24, nome: 'Participante 24', email: 'participante24@example.com', status: 'pendente' },
  ],
};

const GestaoDeParticipantes = () => {
  const [eventoSelecionado, setEventoSelecionado] = useState(eventos[0].id);
  const [dadosDosParticipantes, setDadosDosParticipantes] = useState(participantesPorEvento);
  const [participantes, setParticipantes] = useState(dadosDosParticipantes[eventoSelecionado]);

  const handleChangeEvento = (idDoEvento) => {
    setEventoSelecionado(idDoEvento);
    setParticipantes(dadosDosParticipantes[idDoEvento]);
  };

  const atualizarStatus = (id, novoStatus) => {
    const participantesAtualizados = participantes.map(participante =>
      participante.id === id ? { ...participante, status: novoStatus } : participante
    );

    setParticipantes(participantesAtualizados);

    setDadosDosParticipantes(prevDados => ({
      ...prevDados,
      [eventoSelecionado]: participantesAtualizados,
    }));
  };

  return (
    <div>
      <Header/>
      <div id="name">
        <div className="card">
          <h1>Gestão de Participantes</h1>
          <div>
            <label>Selecionar Evento:</label>
            <select
              value={eventoSelecionado}
              onChange={(e) => handleChangeEvento(Number(e.target.value))}
            >
              {eventos.map(evento => (
                <option key={evento.id} value={evento.id}>
                  {evento.nome}
                </option>
              ))}
            </select>
          </div>
          <ul>
            {participantes.map(participante => (
              <li key={participante.id}>
                {participante.nome} ({participante.email}) - {participante.status}
                <button id="aceitar" onClick={() => atualizarStatus(participante.id, 'Aceito')}>Aceitar</button>
                <button id="recusar" onClick={() => atualizarStatus(participante.id, 'Negado')}>Recusar</button>
                <button id="cancelar" onClick={() => atualizarStatus(participante.id, 'Cancelado')}>Cancelar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestaoDeParticipantes;
