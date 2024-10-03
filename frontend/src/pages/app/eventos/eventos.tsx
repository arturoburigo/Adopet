import { useEffect, useState } from "react";
import { EventsCard } from "../../../components/eventCard/eventCard";
import { EventContainer } from "./styles";
import { getAllEvents } from "../../../api/get-all-events";
import { Event } from "../../../components/modalEvent/modalEvent";
import { Header } from "../../../components/header/header";

export function Eventos() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getAllEvents();
        setEvents(data.events.events); // Ajuste esta linha conforme a estrutura da resposta da sua API
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <EventContainer>
        {events.filter(event => event.id).map((event) => (
          <EventsCard
            key={event.id}
            event={{
              id: event.id || '',
              img: `http://localhost:3333/files/${event.img}`,
              title: event.title,
              description: event.description,
              date: event.date,
            }}
          />
        ))}
      </EventContainer>
    </>
  );
}
