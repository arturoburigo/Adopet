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
exports.AuthenticateUseCase = void 0;
const invalid_credentials_error_1 = require("../errors/invalid-credentials-error");
const bcryptjs_1 = require("bcryptjs");
class AuthenticateUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, }) {
            const user = yield this.usersRepository.searchByEmail(email);
            if (!user) {
                throw new invalid_credentials_error_1.InvalidCredentialsError();
            }
            const passwordMatchValidation = yield (0, bcryptjs_1.compare)(password, user.password_hash);
            if (!passwordMatchValidation) {
                throw new invalid_credentials_error_1.InvalidCredentialsError();
            }
            return {
                user,
            };
        });
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
