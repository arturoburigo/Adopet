import { Button } from '../ui/button/button';
import { CardContainer, Title, Date, Description, EventImage } from './styles'; 

interface EventProps {
    id: string; 
    title: string;
    img: string; 
    description: string;
    date: string;
}

interface EventsCardProps{
    event: EventProps; 
    onClick?: () => void;
    admin?: boolean;  // Propriedade opcional 'admin'
}
export function EventsCard({ event, admin, onClick }: EventsCardProps) {
    return (
        <CardContainer>
            <Title>{event.title}</Title>
            <Date>{event.date}</Date>
            <EventImage src={event.img} alt={event.title} />
            <Description>{event.description}</Description>

            {admin && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button text='Excluir' onClick={onClick} />
                </div>
            )}
        </CardContainer>
    );
}

