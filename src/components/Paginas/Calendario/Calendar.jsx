import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.css';
import Header from '../../Header';
import pt from "@fullcalendar/core/locales/pt";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/eventos")
      .then(response => response.json())
      .then(data => {
        const dynamicEvents = data.map(event => ({
          title: event.nomeevento,
          start: event.data,
          end: event.data,
          url: `/${event.nome_evento.replace(/\s+/g, '')}`
        }));
        // Combine static and dynamic events
        setEvents([...staticEvents, ...dynamicEvents]);
      })
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  const staticEvents = [
    {
      title: "Educação Ambiental: Tecnologias para Monitoramento e Preservação do Meio Ambiente",
      start: "2024-06-15",
      end: "2024-06-15",
      url: "/Educa",
    },
    {
      title: "A Importância da Inclusão Digital e Acessibilidade",
      start: "2024-06-13",
      end: "2024-06-13",
      url: "/Include",
    },
    {
      title: "Inovações em Energias Renováveis e Sustentabilidade",
      start: "2024-06-09",
      end: "2024-06-09",
      url: "/Renova",
    },
    {
      title: "Blockchain e Criptomoedas: O Futuro das Transações Digitais",
      start: "2024-06-11",
      end: "2024-06-11",
      url: "/Blockchain",
    },
    {
      title: "Inteligência Artificial e Machine Learning para Iniciantes",
      start: "2024-06-10",
      end: "2024-06-10",
      url: "/IA"
    },
    {
      title: "Desenvolvimento de Aplicações Web com React",
      start: "2024-06-08",
      end: "2024-06-08",
      url: "/React",
    },
    {
      title: "Técnicas de Comunicação Eficaz no Ambiente de Trabalho",
      start: "2024-06-19",
      end: "2024-06-19",
      url: "/Comu",
    },
    {
      title: "Como se Preparar para Entrevistas de Emprego no Setor de Tecnologia",
      start: "2024-06-20",
      end: "2024-06-20",
      url: "/Entre",
    },
    {
      title: "Gestão de Tempo e Produtividade Pessoal",
      start: "2024-06-16",
      end: "2024-06-16",
      url: "/Gestao",
    },
    {
      title: "Festival de Cinema Independente e Arte Experimental",
      start: "2024-06-04",
      end: "2024-06-04",
      url: "/Fest",
    },
    {
      title: "Encontro de Literatura e Performance Poética",
      start: "2024-06-27",
      end: "2024-06-27",
      url: "/Lite",
    },
    {
      title: "Workshop de Arte Urbana: Grafite e Street Art",
      start: "2024-06-29",
      end: "2024-06-29",
      url: "/Urban",
    }
  ];

  const handleEventClick = (info) => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    }
  };

  return (
    <div>
      <Header />
      <div className="calendar-container">
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"90vh"}
          events={staticEvents}
          locale={pt}
          eventClick={handleEventClick}
          eventContent={(info) => (
            <div style={{ whiteSpace: 'normal', fontSize: '12px' }}>
              {info.event.title}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default Calendar;