import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { SearchByIdPetUseCase } from "../search-byId-pet";

export function makeSearchPetByIdUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const searchPetByIdUseCase = new SearchByIdPetUseCase(prismaPetsRepository);

  return searchPetByIdUseCase;
}