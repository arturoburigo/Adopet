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
exports.searchById = searchById;
const zod_1 = require("zod");
const make_searchById_pet_1 = require("../../use-cases/factories/make-searchById-pet");
function searchById(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchPetsParamSchema = zod_1.z.object({
            petId: zod_1.z.string()
        });
        try {
            // Acessa petId a partir de request.params
            const { petId } = searchPetsParamSchema.parse(request.params);
            const searchPetUseCase = (0, make_searchById_pet_1.makeSearchPetByIdUseCase)();
            const pet = yield searchPetUseCase.execute({ petId });
            if (!pet) {
                return response.status(404).send({
                    message: "Pet not found"
                });
            }
            return response.status(200).send({ pet });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error searching pet by ID:', error);
                return response.status(500).send({
                    message: "Internal server error",
                    error: error.message
                });
            }
            else {
                console.error('Unknown error:', error);
                return response.status(500).send({
                    message: "Internal server error",
                    error: "An unknown error occurred"
                });
            }
        }
    });
}
