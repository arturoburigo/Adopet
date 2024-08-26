import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { SearchPetUseCase } from "../search-pet";

export function makeSearchPetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const searchPetUseCase = new SearchPetUseCase(prismaPetsRepository);

  return searchPetUseCase;
}