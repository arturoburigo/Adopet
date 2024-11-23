"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchEventsUseCase = makeSearchEventsUseCase;
const prisma_events_repository_1 = require("../../repositories/prisma/prisma-events-repository");
const search_events_1 = require("../search-events");
function makeSearchEventsUseCase() {
    const prismaEventsRepository = new prisma_events_repository_1.PrismaEventsRepository();
    const searchEventsUseCase = new search_events_1.SearchEventUseCase(prismaEventsRepository);
    return searchEventsUseCase;
}
