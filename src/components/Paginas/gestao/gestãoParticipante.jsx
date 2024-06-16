import React, { useState } from 'react';
import './gestao.css'

const eventos = [
  { id: 1, nome: 'Evento na Rocinha' },
  { id: 2, nome: 'Evento no Green Place' },
];

const participantesPorEvento = {
  1: [
    { id: 1, nome: 'michele rapariga', email: 'criadefavela@gmail.com', status: 'pendente' },
    { id: 2, nome: 'Guigui da Mamãe', email: 'mamaepodesim@gmail.com', status: 'pendente' },
  ],
  2: [
    { id: 3, nome: 'Keplin', email: 'soucasadacommickael@gmail.com', status: 'pendente' },
    { id: 4, nome: 'Marido da Socorro', email: 'ivesLeonardo@gmail.com', status: 'pendente' },
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

    // Atualizar o estado global dos participantes
    setDadosDosParticipantes(prevDados => ({
      ...prevDados,
      [eventoSelecionado]: participantesAtualizados,
    }));
  };

  return (
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
            <button onClick={() => atualizarStatus(participante.id, 'Aceito')}>Aceitar</button>
            <button onClick={() => atualizarStatus(participante.id, 'Negado')}>Recusar</button>
            <button onClick={() => atualizarStatus(participante.id, 'Cancelado')}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestaoDeParticipantes;
