"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchPetUseCase = makeSearchPetUseCase;
const prisma_pets_repository_1 = require("../../repositories/prisma/prisma-pets-repository");
const search_pet_1 = require("../search-pet");
function makeSearchPetUseCase() {
    const prismaPetsRepository = new prisma_pets_repository_1.PrismaPetsRepository();
    const searchPetUseCase = new search_pet_1.SearchPetUseCase(prismaPetsRepository);
    return searchPetUseCase;
}
