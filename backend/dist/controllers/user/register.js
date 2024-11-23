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
exports.register = register;
const zod_1 = require("zod");
const make_user_register_1 = require("../../use-cases/factories/make-user-register");
const user_already_exists_error_1 = require("../../errors/user-already-exists-error");
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const registerBodySchema = zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6),
            name: zod_1.z.string().min(3),
        });
        const { email, password, name } = registerBodySchema.parse(req.body);
        try {
            const registerUseCase = (0, make_user_register_1.makeRegisterUserUseCase)(); //Factory pattern
            yield registerUseCase.execute({ email, password, name });
        }
        catch (err) {
            if (err instanceof user_already_exists_error_1.UserAlreadyExistsError) {
                res.status(400).json(err.message);
            }
            throw err;
        }
        return res.status(201).json({ message: "User created" });
    });
}
