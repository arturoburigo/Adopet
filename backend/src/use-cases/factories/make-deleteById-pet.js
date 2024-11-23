"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeletePetByIdUseCase = makeDeletePetByIdUseCase;
const prisma_pets_repository_1 = require("../../repositories/prisma/prisma-pets-repository");
const delete_byId_pet_1 = require("../delete-byId-pet");
function makeDeletePetByIdUseCase() {
    const prismaPetsRepository = new prisma_pets_repository_1.PrismaPetsRepository();
    const searchPetByIdUseCase = new delete_byId_pet_1.DeletePetUseCase(prismaPetsRepository);
    return searchPetByIdUseCase;
}
