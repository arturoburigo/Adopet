import { Event, Prisma } from "@prisma/client";

export interface EventsRepositoryInterface {
    create(data: Prisma.EventCreateInput): Promise<Event>;
    searchMany(page: number): Promise<Event[]>;
    searchById(id: string): Promise<Event | null>;
    deleteEvent(id: string): Promise<Event | null>;
}