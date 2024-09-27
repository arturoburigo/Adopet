import { Prisma } from "@prisma/client";
import { EventsRepositoryInterface } from "../events-repository";
import { prisma } from "../../lib/prisma";

export class PrismaEventsRepository implements EventsRepositoryInterface{
    async create(data: Prisma.EventCreateInput) {
        const event = await prisma.event.create({data})
        return event
    }

    async searchMany(page: number) {
        const event = await prisma.event.findMany({
            take: 20,
            skip: (page - 1) * 20
        })
        return event
    }

    async deleteEvent(id: string) {
        const event = await prisma.event.delete({
            where: {
                id
            }
        })
        return event
    }

}