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
exports.petsRoutes = petsRoutes;
const register_1 = require("./register");
const multer_1 = __importDefault(require("../../config/multer"));
const multer_2 = __importDefault(require("multer"));
const seach_1 = require("./seach");
const searchbyId_1 = require("./searchbyId");
const isAuthenticated_1 = require("../../middlewares/isAuthenticated");
const deletebyId_1 = require("./deletebyId");
const editPet_1 = require("./editPet");
function petsRoutes(router) {
    return __awaiter(this, void 0, void 0, function* () {
        const upload = (0, multer_2.default)(multer_1.default.upload("./tmp"));
        router.post('/pets', upload.single("petImg"), isAuthenticated_1.isAuthenticated, register_1.register);
        router.get('/pets', seach_1.search);
        router.get('/pets/:petId', searchbyId_1.searchById);
        router.delete('/pets/:id', deletebyId_1.deletePetById);
        router.put('/pets/:id', upload.single("petImg"), isAuthenticated_1.isAuthenticated, editPet_1.editPet);
    });
}
