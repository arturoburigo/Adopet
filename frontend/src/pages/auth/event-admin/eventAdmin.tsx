import { useEffect, useState } from "react";
import { EventsCard } from "../../../components/eventCard/eventCard";
import { EventContainer } from "./styles";
import { getAllEvents } from "../../../api/get-all-events";
import { HeaderAdmin } from "../../../components/header_admin/headerAdmin";
import { deleteEventById } from "../../../api/delete-event-by-id";
import { Button_div } from "../admin-home/styles";
import { Button } from "../../../components/ui/button/button";
import { Event } from "../../../components/modalEvent/modalEvent";
import { EventModalAdmin } from "../../../components/modalEvent/modalEvent";
import { createEvent } from "../../../api/create-event";

export function EventAdmin() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Estado para o evento selecionado

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

  async function handleDeleteEvent(id: string) {
    try {
      await deleteEventById(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
    }
  }

  // Função para abrir o modal
  const handleOpenModal = () => {
    setSelectedEvent(null); // Limpa a seleção ao abrir o modal
    setIsModalOpen(true); // Abre o modal
  };


  // Função para salvar o evento
  const handleSaveEvent = async (newEvent: Event, eventImgFile?: File | null) => {
      try {
          const createdEvent = await createEvent(newEvent, eventImgFile); // Chama a função createEvent
          setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: createdEvent.id, img: createdEvent.img }]); // Atualiza o estado de eventos com os dados retornados
          setIsModalOpen(false); // Fecha o modal após salvar
      } catch (error) {
          console.error("Erro ao salvar o evento:", error);
      }
  };
  

  return (
    <>
      <HeaderAdmin />
      <Button_div>
        <Button text="Adicionar evento" onClick={handleOpenModal} /> {/* Adiciona a função para abrir o modal */}
      </Button_div>
      <EventContainer>
        {events.filter(event => event.id).map((event) => (
          <EventsCard
            onClick={() => event.id && handleDeleteEvent(event.id)}
            admin={true}
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

      {/* Modal para adicionar um novo evento */}
      <EventModalAdmin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Fecha o modal ao clicar no botão de fechar
        eventData={selectedEvent}
        onSave={handleSaveEvent} // Passa a função para salvar o evento
      />
    </>
  );
}
