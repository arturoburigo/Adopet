import { Event } from "@prisma/client";
import { EventsRepositoryInterface } from "../repositories/events-repository";

interface RegisterEventUseCaseRequest {
    title: string;
    description: string;    
    img: string;
    date: string;
}

interface RegisterEventUseCaseResponse {
    event: Event;
}

export class RegisterEventUseCase {
    constructor(private eventsRepository: EventsRepositoryInterface) {}

    async execute({
        title,
        description,
        img,
        date
    }: RegisterEventUseCaseRequest): Promise<RegisterEventUseCaseResponse> {
        const event = await this.eventsRepository.create({
            title,
            description,
            img,
            date
        });
        return { event }
    }
}