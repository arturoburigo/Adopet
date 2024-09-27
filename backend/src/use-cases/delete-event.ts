import { Event } from "@prisma/client";
import { EventsRepositoryInterface } from "../repositories/events-repository";

interface deleteEventUseCaseRequest {
    id: string;
}

interface deleteEventUseCaseResponse {
    event: Event | null;
}

export class DeleteEventUseCase {
    constructor(private eventsRepository: EventsRepositoryInterface) {}

    async execute({ id }: deleteEventUseCaseRequest): Promise<deleteEventUseCaseResponse> {
        const event = await this.eventsRepository.deleteEvent(id);

        return { event }
    }
}