import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { EditPetUseCase } from "../editPet";

export function makeEditPetByIdUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const searchPetByIdUseCase = new EditPetUseCase(prismaPetsRepository);

  return searchPetByIdUseCase;
}