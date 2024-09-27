import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { DeleteEventUseCase } from "../delete-event";

export function makeDeleteEventUseCase(){
    const prismaEventsRepository = new PrismaEventsRepository();
    const deleteEventUseCase = new DeleteEventUseCase(prismaEventsRepository);

    return deleteEventUseCase;
}