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
    { id: 1, nome: 'João Artur Veras Alves', email: 'jverasalves@gmail.com', status: 'pendente' },
    { id: 2, nome: 'José Lucas Marques Silva', email: 'joselucasms07@gmail.com', status: 'pendente' },
  ],
  2: [
    { id: 3, nome: 'Gabriel Lages', email: 'gabrielLages@gmail.com', status: 'pendente' },
    { id: 4, nome: 'Victor Cerqueira', email: 'victorCerqueira@gmail.com', status: 'pendente' },
  ],
  3: [
    { id: 5, nome: 'Ives Mendes', email: 'ivesMendes@gmail.com', status: 'pendente' },
    { id: 6, nome: 'Tárcio Gabriel', email: 'tarcioGabriel@gmail.com', status: 'pendente' },
  ],
  4: [
    { id: 7, nome: 'Mickael Gueds', email: 'mickaelGueds@gmail.com', status: 'pendente' },
    { id: 8, nome: 'Enzo Manoel', email: 'enzoManoel@gmail.com', status: 'pendente' },
  ],
  5: [
    { id: 9, nome: 'Edilberto Junior', email: 'edilbertoJunior@gmail.com', status: 'pendente' },
    { id: 10, nome: 'Celso Filho', email: 'celsoFilho@gmail.com', status: 'pendente' },
  ],
  6: [
    { id: 11, nome: 'Lucas César', email: 'lucasCesar@gmail.com', status: 'pendente' },
    { id: 12, nome: 'Sammuel Saraiva', email: 'sammuelSaraiva@gmail.com', status: 'pendente' },
  ],
  7: [
    { id: 13, nome: 'Chopp Gelado', email: 'Tateligando@gmail.com', status: 'pendente' },
    { id: 14, nome: 'Pedro Martins', email: 'pedroMartins@gmail.com', status: 'pendente' },
  ],
  8: [
    { id: 15, nome: 'Pedro Henrique', email: 'pedroHenrique@gmail.com', status: 'pendente' },
    { id: 16, nome: 'Igor Nezaidy', email: 'igorNezaidy@gmail.com', status: 'pendente' },
  ],
  9: [
    { id: 17, nome: 'Alcivan', email: 'Alcivan@gmail.com', status: 'pendente' },
    { id: 18, nome: 'Luiz Felipe Aguiar', email: 'LFAguiar@example.com', status: 'pendente' },
  ],
  10: [
    { id: 19, nome: 'Heitor Luz', email: 'heitorLuz@gmail.com', status: 'pendente' },
    { id: 20, nome: 'Pedro Elvas', email: 'pedroElvas@gmail.com', status: 'pendente' },
  ],
  11: [
    { id: 21, nome: 'Marcos Vilanova', email: 'marcosVilanova@gmail.com', status: 'pendente' },
    { id: 22, nome: 'Rafael Paz', email: 'rafaPaz@gmail.com', status: 'pendente' },
  ],
  12: [
    { id: 23, nome: 'Gabriel Glasckowicz', email: 'gabrielGlasckowicz', status: 'pendente' },
    { id: 24, nome: 'João Vitor Mendes', email: 'joaoVitorM@gmail.com', status: 'pendente' },
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
