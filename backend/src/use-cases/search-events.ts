import { Event } from "@prisma/client";
import { EventsRepositoryInterface } from "../repositories/events-repository";

interface searchEventUseCaseRequest {
    page: number;
}

interface searchEventUseCaseResponse {
    events: Event[];
}

export class SearchEventUseCase {
    constructor(private eventsRepository: EventsRepositoryInterface) {}

    async execute({ page }: searchEventUseCaseRequest): Promise<searchEventUseCaseResponse> {
        const events = await this.eventsRepository.searchMany(page);

        return { events }
    }
}