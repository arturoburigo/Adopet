    import { Request, Response } from "express";
    import { PetSize } from "../../use-cases/register-pet";
    import { PetGender } from "../../use-cases/register-pet";
    import { makeRegisterPetUseCase } from "../../use-cases/factories/make-register-pet-use-case";

    export async function register(request: Request, response: Response) {
        console.log("Request Body:", request.body);
        console.log("Request File:", request.file);

        const { about, age, breed, castrate, name, size, whatsapp, vacinated } = request.body;
        const petImg = request.file?.filename;

        // Converter castrate para Boolean, aceitando "true" e "false"
        const castrateBoolean = castrate === 'true' ? true : castrate === 'false' ? false : undefined;
        const vacinatedBoolean = vacinated === 'true' ? true : vacinated === 'false' ? false : false;

        // Validar a presença de todos os campos e enviar mensagem específica para o campo faltante
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
        if (!petImg) {
            return response.status(400).send({ error: 'At least one image is required' });
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
            const registerPetUseCase = makeRegisterPetUseCase();
            
            await registerPetUseCase.execute({ 
                about, 
                age, 
                breed, 
                castrate: castrateBoolean,
                vacinated: vacinatedBoolean,
                whatsapp,
                name, 
                petImg, 
                size: sizeEnum,
                sex: sizeGender
            });
            
            response.status(201).send({ message: "Pet registered successfully" });
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error during pet registration:', err);
                response.status(500).send({ 
                    error: 'An error occurred while registering the pet', 
                    details: err.message, 
                    stack: err.stack 
                });
            } else {
                console.error('Unexpected error during pet registration:', err);
                response.status(500).send({ 
                    error: 'An unexpected error occurred' 
                });
            }
        }
    }
