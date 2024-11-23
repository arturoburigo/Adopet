"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEditPetByIdUseCase = makeEditPetByIdUseCase;
const prisma_pets_repository_1 = require("../../repositories/prisma/prisma-pets-repository");
const editPet_1 = require("../editPet");
function makeEditPetByIdUseCase() {
    const prismaPetsRepository = new prisma_pets_repository_1.PrismaPetsRepository();
    const searchPetByIdUseCase = new editPet_1.EditPetUseCase(prismaPetsRepository);
    return searchPetByIdUseCase;
}
