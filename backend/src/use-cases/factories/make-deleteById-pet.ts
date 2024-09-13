import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { DeletePetUseCase } from "../delete-byId-pet";

export function makeDeletePetByIdUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const searchPetByIdUseCase = new DeletePetUseCase(prismaPetsRepository);

  return searchPetByIdUseCase;
}