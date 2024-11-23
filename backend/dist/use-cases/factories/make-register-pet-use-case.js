"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterPetUseCase = makeRegisterPetUseCase;
const prisma_pets_repository_1 = require("../../repositories/prisma/prisma-pets-repository");
const register_pet_1 = require("../register-pet");
function makeRegisterPetUseCase() {
    const prismaPetsRepository = new prisma_pets_repository_1.PrismaPetsRepository();
    const registerPetUseCase = new register_pet_1.RegisterPetUseCase(prismaPetsRepository);
    return registerPetUseCase;
}
