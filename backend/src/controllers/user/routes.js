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
exports.userRoutes = userRoutes;
const register_1 = require("./register");
const authenticate_1 = require("./authenticate");
const refreshToken_1 = require("./refreshToken");
function userRoutes(router) {
    return __awaiter(this, void 0, void 0, function* () {
        router.post("/register", register_1.register);
        router.post("/sessions", authenticate_1.authenticate);
        router.post("/refresh-token", refreshToken_1.refreshToken);
    });
}
