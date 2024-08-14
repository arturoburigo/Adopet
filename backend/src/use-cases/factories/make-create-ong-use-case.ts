import { PrismaOngRepository } from "../../repositories/prisma/prisma-ong-repository";
import { CreateOngUseCase } from "../create-ong";

export function makeCreateOngUseCase() {
  const prismaOngsRepository = new PrismaOngRepository();
  const useCase = new CreateOngUseCase(prismaOngsRepository);

  return useCase;
}