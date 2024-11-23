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
exports.editPet = editPet;
const editPet_1 = require("../../use-cases/editPet"); // As enums podem estar em um arquivo diferente
const editPet_2 = require("../../use-cases/editPet"); // Dependendo da estrutura do seu projeto
const make_edit_pet_use_case_1 = require("../../use-cases/factories/make-edit-pet-use-case");
function editPet(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = request.params.id; // Recebendo o ID pela rota
        const { about, age, breed, castrate, name, size, whatsapp, vacinated } = request.body;
        // Converter castrate e vacinated para Boolean
        const castrateBoolean = castrate === 'true' ? true : castrate === 'false' ? false : undefined;
        const vacinatedBoolean = vacinated === 'true' ? true : vacinated === 'false' ? false : false;
        // Validar a presença de todos os campos obrigatórios
        if (!id) {
            return response.status(400).send({ error: 'ID is required' });
        }
        if (!name) {
            return response.status(400).send({ error: 'Name is required' });
        }
        if (!age) {
            return response.status(400).send({ error: 'Age is required' });
        }
        if (!breed) {
            return response.status(400).send({ error: 'Breed is required' });
        }
        if (!size) {
            return response.status(400).send({ error: 'Size is required' });
        }
        if (!about) {
            return response.status(400).send({ error: 'About is required' });
        }
        if (!['small', 'medium', 'large'].includes(size)) {
            return response.status(400).send({ error: 'Invalid size value' });
        }
        if (castrateBoolean === undefined) {
            return response.status(400).send({ error: 'Invalid value for castrate' });
        }
        if (vacinatedBoolean === undefined) {
            return response.status(400).send({ error: 'Invalid value for vacinated' });
        }
        if (!whatsapp) {
            return response.status(400).send({ error: 'Whatsapp is required' });
        }
        const sizeEnum = editPet_1.PetSize[size];
        const sizeGender = editPet_2.PetGender[size];
        try {
            const editPetUseCase = (0, make_edit_pet_use_case_1.makeEditPetByIdUseCase)();
            const updatedPet = yield editPetUseCase.execute({
                id,
                about,
                age,
                breed,
                castrate: castrateBoolean,
                vacinated: vacinatedBoolean,
                whatsapp,
                name,
                size: sizeEnum,
                sex: sizeGender
            });
            if (updatedPet) {
                response.status(200).send({ message: "Pet updated successfully", pet: updatedPet });
            }
            else {
                response.status(404).send({ error: "Pet not found" });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('Error during pet update:', err);
                response.status(500).send({
                    error: 'An error occurred while updating the pet',
                    details: err.message,
                    stack: err.stack
                });
            }
            else {
                console.error('Unexpected error during pet update:', err);
                response.status(500).send({
                    error: 'An unexpected error occurred'
                });
            }
        }
    });
}
