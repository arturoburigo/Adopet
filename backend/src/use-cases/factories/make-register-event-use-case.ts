import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { RegisterEventUseCase } from "../register-event";

export function makeRegisterEventUseCase() {
  const prismaEventsRepository = new PrismaEventsRepository();
  const registerEventUseCase = new RegisterEventUseCase(prismaEventsRepository);

  return registerEventUseCase;
}