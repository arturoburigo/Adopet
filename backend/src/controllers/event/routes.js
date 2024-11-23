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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRoutes = eventRoutes;
const multer_1 = __importDefault(require("../../config/multer"));
const register_1 = require("./register");
const multer_2 = __importDefault(require("multer"));
const search_1 = require("./search");
const delete_1 = require("./delete");
function eventRoutes(router) {
    return __awaiter(this, void 0, void 0, function* () {
        const upload = (0, multer_2.default)(multer_1.default.upload("./tmp"));
        router.post("/event", upload.single("img"), register_1.register);
        router.get("/event", search_1.search);
        router.delete("/event/:id", delete_1.deleteEvent);
    });
}
