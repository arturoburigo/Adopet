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
exports.search = search;
const make_search_pets_1 = require("../../use-cases/factories/make-search-pets");
const zod_1 = require("zod");
function search(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchPetsQuerySchema = zod_1.z.object({
            page: zod_1.z.coerce.number().min(1).default(1),
        });
        const { page } = searchPetsQuerySchema.parse(request.query);
        const searchPetUseCase = (0, make_search_pets_1.makeSearchPetUseCase)();
        const pets = yield searchPetUseCase.execute({ page: Number(page) });
        return response.status(200).send({ pets });
    });
}
