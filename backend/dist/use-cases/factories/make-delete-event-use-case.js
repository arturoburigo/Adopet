"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteEventUseCase = makeDeleteEventUseCase;
const prisma_events_repository_1 = require("../../repositories/prisma/prisma-events-repository");
const delete_event_1 = require("../delete-event");
function makeDeleteEventUseCase() {
    const prismaEventsRepository = new prisma_events_repository_1.PrismaEventsRepository();
    const deleteEventUseCase = new delete_event_1.DeleteEventUseCase(prismaEventsRepository);
    return deleteEventUseCase;
}
