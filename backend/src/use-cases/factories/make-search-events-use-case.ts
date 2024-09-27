import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { SearchEventUseCase } from "../search-events";

export function makeSearchEventsUseCase() {
    const prismaEventsRepository = new PrismaEventsRepository();
    const searchEventsUseCase = new SearchEventUseCase(prismaEventsRepository);

    return searchEventsUseCase;
}