"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterEventUseCase = makeRegisterEventUseCase;
const prisma_events_repository_1 = require("../../repositories/prisma/prisma-events-repository");
const register_event_1 = require("../register-event");
function makeRegisterEventUseCase() {
    const prismaEventsRepository = new prisma_events_repository_1.PrismaEventsRepository();
    const registerEventUseCase = new register_event_1.RegisterEventUseCase(prismaEventsRepository);
    return registerEventUseCase;
}
