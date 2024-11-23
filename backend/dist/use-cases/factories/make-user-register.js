"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterUserUseCase = makeRegisterUserUseCase;
const prisma_users_repository_1 = require("../../repositories/prisma/prisma-users-repository");
const register_user_1 = require("../register-user");
function makeRegisterUserUseCase() {
    const prismaUsersRepository = new prisma_users_repository_1.PrismaUsersRepository();
    const registerUserUseCase = new register_user_1.RegisterUserUseCase(prismaUsersRepository);
    return registerUserUseCase;
}
