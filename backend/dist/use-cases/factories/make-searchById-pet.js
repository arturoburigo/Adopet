"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchPetByIdUseCase = makeSearchPetByIdUseCase;
const prisma_pets_repository_1 = require("../../repositories/prisma/prisma-pets-repository");
const search_byId_pet_1 = require("../search-byId-pet");
function makeSearchPetByIdUseCase() {
    const prismaPetsRepository = new prisma_pets_repository_1.PrismaPetsRepository();
    const searchPetByIdUseCase = new search_byId_pet_1.SearchByIdPetUseCase(prismaPetsRepository);
    return searchPetByIdUseCase;
}
