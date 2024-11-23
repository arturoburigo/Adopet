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
const register_pet_1 = require("../../use-cases/register-pet");
const register_pet_2 = require("../../use-cases/register-pet");
const make_register_pet_use_case_1 = require("../../use-cases/factories/make-register-pet-use-case");
function register(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { about, age, breed, castrate, name, size, whatsapp, vacinated, sex } = request.body;
        const petImg = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
        // Converter castrate e vacinated para Boolean
        const castrateBoolean = castrate === 'true' ? true : castrate === 'false' ? false : undefined;
        const vacinatedBoolean = vacinated === 'true' ? true : vacinated === 'false' ? false : false;
        // Validar a presença de todos os campos
        if (!name)
            return response.status(400).send({ error: 'Name is required' });
        if (!age)
            return response.status(400).send({ error: 'Age is required' });
        if (!breed)
            return response.status(400).send({ error: 'Breed is required' });
        if (!size)
            return response.status(400).send({ error: 'Size is required' });
        if (!about)
            return response.status(400).send({ error: 'About is required' });
        if (!petImg)
            return response.status(400).send({ error: 'At least one image is required' });
        if (!['small', 'medium', 'large'].includes(size))
            return response.status(400).send({ error: 'Invalid size value' });
        if (!['F', 'M'].includes(sex))
            return response.status(400).send({ error: 'Invalid value for sex' });
        if (castrateBoolean === undefined)
            return response.status(400).send({ error: 'Invalid value for castrate' });
        if (vacinatedBoolean === undefined)
            return response.status(400).send({ error: 'Invalid value for vacinated' });
        if (!whatsapp)
            return response.status(400).send({ error: 'Whatsapp is required' });
        console.log('File uploaded:', petImg);
        console.log('Received gender:', sex); // Log para depuração
        const sizeEnum = register_pet_1.PetSize[size];
        const genderEnum = register_pet_2.PetGender[sex];
        // Log para verificar se genderEnum está correto
        console.log('Mapped gender:', genderEnum);
        try {
            const registerPetUseCase = (0, make_register_pet_use_case_1.makeRegisterPetUseCase)();
            yield registerPetUseCase.execute({
                about,
                age,
                breed,
                castrate: castrateBoolean,
                vacinated: vacinatedBoolean,
                whatsapp,
                name,
                petImg,
                size: sizeEnum,
                sex: genderEnum // Passando o gênero correto
            });
            response.status(201).send({ message: "Pet registered successfully" });
        }
        catch (err) {
            // Aqui você pode fazer um type assertion para 'Error'
            if (err instanceof Error) {
                console.error('Error during pet registration:', err);
                response.status(500).send({
                    error: 'An error occurred while registering the pet',
                    details: err.message,
                    stack: err.stack
                });
            }
            else {
                // Caso seja um erro não previsto, trate como um erro genérico
                console.error('Unexpected error during pet registration:', err);
                response.status(500).send({
                    error: 'An unexpected error occurred'
                });
            }
        }
    });
}
