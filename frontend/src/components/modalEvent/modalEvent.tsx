import { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, CloseButton, Input, Label, SaveButton } from './styles';

export interface Event {
    id: string;
    title: string;
    img: string;
    date: string;
    description: string;
}

interface EventModalAdminProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: Event | null;
    onSave: (event: Event, eventImgFile?: File | null) => void; // Adicionar o parâmetro da imagem
}

export const EventModalAdmin: React.FC<EventModalAdminProps> = ({ isOpen, onClose, eventData, onSave }) => {
    const [event, setEvent] = useState<Event>({
        id: '',
        title: '',
        img: '',
        date: '',
        description: '',
    });
    const [eventImgFile, setEventImgFile] = useState<File | null>(null); // Estado para o arquivo da imagem

    useEffect(() => {
        if (eventData) {
            setEvent(eventData); // Carregar os dados do evento para edição
        } else {
            // Se não houver eventData, significa que é um novo evento
            setEvent({
                id: '',
                title: '',
                img: '',
                date: '',
                description: '',
            });
        }
    }, [eventData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEvent((prevEvent: Event) => ({ ...prevEvent, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;  // Verifica se o arquivo foi selecionado
        console.log('Selected file:', file); // Adicione esta linha para depurar
        setEventImgFile(file);  // Define o arquivo da imagem
    };

    const handleSave = async () => {
        console.log('Event Image File:', eventImgFile); // Debugging line
        try {
            // Chama a função onSave com o evento e o arquivo de imagem
            await onSave(event, eventImgFile); // Certifique-se de que eventImgFile seja passado corretamente
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };
    
    if (!isOpen) return null;

    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Adicionar Novo Evento</h2>

                <Label>Titulo:</Label>
                <Input type="text" name="title" value={event.title} onChange={handleInputChange} />

                <Label>Data do Evento:</Label>
                <Input type="date" name="date" value={event.date} onChange={handleInputChange} />

                <Label>Descrição:</Label>
                <Input type="text" name="description" value={event.description} onChange={handleInputChange} />

                <Label>Imagem do Evento:</Label>
                <Input type="file" name="img" accept="image/*" onChange={handleImageChange} />  {/* Campo para selecionar imagem */}

                <SaveButton onClick={handleSave}>Criar Evento</SaveButton>
            </ModalContent>
        </ModalContainer>
    );
};
