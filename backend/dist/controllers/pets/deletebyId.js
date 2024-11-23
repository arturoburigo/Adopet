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
exports.deletePetById = deletePetById;
const zod_1 = require("zod");
const make_deleteById_pet_1 = require("../../use-cases/factories/make-deleteById-pet");
function deletePetById(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletePetByIdQuerySchema = zod_1.z.object({
            id: zod_1.z.coerce.string()
        });
        const { id } = deletePetByIdQuerySchema.parse(request.params);
        const deletePetUseCase = (0, make_deleteById_pet_1.makeDeletePetByIdUseCase)();
        const pet = yield deletePetUseCase.execute({ id });
        return response.status(201).send({ message: "Pet deleted successfully" });
    });
}
