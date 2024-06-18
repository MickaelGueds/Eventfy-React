import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.css';
import Header from '../../Header';
import pt from "@fullcalendar/core/locales/pt";

function Calendar() {
  const [events, setEvents] = useState([]); // Estado para armazenar os eventos

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Requisição para buscar eventos do backend
        const response = await fetch("http://localhost:5001/eventos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Dados recebidos do backend
        console.log('Fetched events data:', data); // Log dos dados recebidos

        // Formatação dos dados para o FullCalendar
        const dynamicEvents = data.map(event => ({
          title: event.nome_evento,
          start: event.data,
          end: event.data,
          url: `/${event.nome_evento.replace(/\s+/g, '_')}`
        }));
        console.log('Formatted events data:', dynamicEvents); // Log dos dados formatados

        setEvents(dynamicEvents); // Atualiza o estado com os eventos formatados
      } catch (error) {
        console.error("Error fetching events:", error); // Log de erros
      }
    };

    fetchEvents(); // Chama a função para buscar os eventos
  }, []); // Executa apenas uma vez quando o componente é montado

  const handleEventClick = (info) => {
    if (info.event.url) {
      window.open(info.event.url); // Abre o URL do evento em uma nova aba
      info.jsEvent.preventDefault(); // Previne o comportamento padrão do link
    }
  };

  return (
    <div>
      <Header /> {/* Componente de cabeçalho */}
      <div className="calendar-container">
        <Fullcalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"} // Exibição inicial do calendário
          headerToolbar={{
            start: "today prev,next", // Botões à esquerda
            center: "title", // Título no centro
            end: "dayGridMonth,timeGridWeek,timeGridDay", // Botões à direita
          }}
          height={"90vh"} // Altura do calendário
          events={events} // Eventos para exibir no calendário
          locale={pt} // Localização em português
          eventClick={handleEventClick} // Manipulador de clique nos eventos
        />
      </div>
    </div>
  );
}

export default Calendar;
