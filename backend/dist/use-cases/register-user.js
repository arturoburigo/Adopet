"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
class RegisterUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, name }) {
            const password_hash = yield (0, bcryptjs_1.hash)(password, 8);
            const userWithSameEmail = yield this.usersRepository.searchByEmail(email);
            if (userWithSameEmail) {
                throw new Error("User already exists");
            }
            const user = yield this.usersRepository.create({
                email,
                password_hash,
                name
            });
            return { user };
        });
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
