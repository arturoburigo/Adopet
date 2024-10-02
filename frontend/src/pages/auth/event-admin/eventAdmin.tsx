// src/pages/Eventos.tsx
import { useEffect, useState } from "react";
import { EventsCard } from "../../../components/eventCard/eventCard";
import { EventContainer } from "./styles";
import { getAllEvents } from "../../../api/get-all-events";
import { HeaderAdmin } from "../../../components/header_admin/headerAdmin";
import { deleteEventById } from "../../../api/delete-event-by-id";

type Event = {
  id: string;
  title: string;
  img: string;
  description: string;
  date: string;
};

export function EventAdmin() {
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

  async function handleDeleteEvent(id: string) {
    try {
      await deleteEventById(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
    }
  }

  return (
    <>
      <HeaderAdmin />

      <EventContainer>
        {events.map((event) => (
          <EventsCard
            onClick={() => handleDeleteEvent(event.id)}
            admin={true}
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
