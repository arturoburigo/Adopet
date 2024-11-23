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
exports.refreshToken = refreshToken;
const jsonwebtoken_1 = require("jsonwebtoken");
function refreshToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.refreshToken; // Pega o refreshToken do cookie
        if (!token) {
            return res.status(401).json({ message: "Refresh token not found" });
        }
        try {
            const payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET); // Verifica o refreshToken
            // Gera um novo accessToken
            const newToken = (0, jsonwebtoken_1.sign)({ sub: payload.sub }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            return res.status(200).json({
                token: newToken,
            });
        }
        catch (err) {
            return res.status(401).json({ message: "Invalid refresh token" });
        }
    });
}
