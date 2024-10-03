import { Request, Response } from "express";
import { PetSize } from "../../use-cases/editPet";  // As enums podem estar em um arquivo diferente
import { PetGender } from "../../use-cases/editPet"; // Dependendo da estrutura do seu projeto
import { makeEditPetByIdUseCase } from "../../use-cases/factories/make-edit-pet-use-case";

export async function editPet(request: Request, response: Response) {
    const id = request.params.id;  // Recebendo o ID pela rota
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

    const sizeEnum = PetSize[size as keyof typeof PetSize];
    const sizeGender = PetGender[size as keyof typeof PetGender];

    try {
        const editPetUseCase = makeEditPetByIdUseCase();

        const updatedPet = await editPetUseCase.execute({ 
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
        } else {
            response.status(404).send({ error: "Pet not found" });
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error during pet update:', err);
            response.status(500).send({ 
                error: 'An error occurred while updating the pet', 
                details: err.message, 
                stack: err.stack 
            });
        } else {
            console.error('Unexpected error during pet update:', err);
            response.status(500).send({ 
                error: 'An unexpected error occurred' 
            });
        }
    }
}
