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
exports.authenticate = authenticate;
const jsonwebtoken_1 = require("jsonwebtoken");
const zod_1 = require("zod");
const make_authenticate_use_case_1 = require("../../use-cases/factories/make-authenticate-use-case");
const invalid_credentials_error_1 = require("../../errors/invalid-credentials-error");
function authenticate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const registerBodySchema = zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6),
        });
        const { email, password } = registerBodySchema.parse(req.body);
        try {
            const authenticateUseCase = (0, make_authenticate_use_case_1.makeAuthenticateUseCase)(); //Factory pattern
            const { user } = yield authenticateUseCase.execute({ email, password });
            const token = (0, jsonwebtoken_1.sign)({}, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: "1d",
            });
            const refreshToken = (0, jsonwebtoken_1.sign)({}, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: "7d",
            });
            res.cookie("refreshToken", refreshToken, {
                secure: true,
                httpOnly: true,
                sameSite: "strict",
            });
            return res.status(200).send({
                token,
            });
        }
        catch (err) {
            if (err instanceof invalid_credentials_error_1.InvalidCredentialsError) {
                res.status(400).json(err.message);
            }
            throw err;
        }
    });
}
