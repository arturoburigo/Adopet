// src/pages/Eventos.tsx
import { useEffect, useState } from "react";
import { EventsCard } from "../../../components/eventCard/eventCard";
import { Header } from "../../../components/header/header";
import { EventContainer } from "./styles";
import { getAllEvents } from "../../../api/get-all-events";

type Event = {
  id: string;
  title: string;
  img: string;
  description: string;
  date: string;
};

export function Eventos() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getAllEvents();
        setEvents(data.events.events); // Adjust this line based on your actual API response structure
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <>
      <Header />

      <EventContainer>
        {events.map((event) => (
          <EventsCard
            key={event.id}
            event={{
              id: event.id,
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
