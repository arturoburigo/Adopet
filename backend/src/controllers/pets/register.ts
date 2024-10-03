import { Request, Response } from "express";
import { PetSize } from "../../use-cases/register-pet";
import { PetGender } from "../../use-cases/register-pet";
import { makeRegisterPetUseCase } from "../../use-cases/factories/make-register-pet-use-case";

export async function register(request: Request, response: Response) {
    const { about, age, breed, castrate, name, size, whatsapp, vacinated, sex } = request.body;
    const petImg = request.file?.filename;

    // Converter castrate e vacinated para Boolean
    const castrateBoolean = castrate === 'true' ? true : castrate === 'false' ? false : undefined;
    const vacinatedBoolean = vacinated === 'true' ? true : vacinated === 'false' ? false : false;

    // Validar a presença de todos os campos
    if (!name) return response.status(400).send({ error: 'Name is required' });
    if (!age) return response.status(400).send({ error: 'Age is required' });
    if (!breed) return response.status(400).send({ error: 'Breed is required' });
    if (!size) return response.status(400).send({ error: 'Size is required' });
    if (!about) return response.status(400).send({ error: 'About is required' });
    if (!petImg) return response.status(400).send({ error: 'At least one image is required' });
    if (!['small', 'medium', 'large'].includes(size)) return response.status(400).send({ error: 'Invalid size value' });
    if (!['F', 'M'].includes(sex)) return response.status(400).send({ error: 'Invalid value for sex' });
    if (castrateBoolean === undefined) return response.status(400).send({ error: 'Invalid value for castrate' });
    if (vacinatedBoolean === undefined) return response.status(400).send({ error: 'Invalid value for vacinated' });
    if (!whatsapp) return response.status(400).send({ error: 'Whatsapp is required' });

    console.log('File uploaded:', petImg);
    console.log('Received gender:', sex);  // Log para depuração

    const sizeEnum = PetSize[size as keyof typeof PetSize];
    const genderEnum = PetGender[sex as keyof typeof PetGender];

    // Log para verificar se genderEnum está correto
    console.log('Mapped gender:', genderEnum); 

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
            sex: genderEnum // Passando o gênero correto
        });
        
        response.status(201).send({ message: "Pet registered successfully" });
    } catch (err) {
        // Aqui você pode fazer um type assertion para 'Error'
        if (err instanceof Error) {
            console.error('Error during pet registration:', err);
            response.status(500).send({ 
                error: 'An error occurred while registering the pet', 
                details: err.message, 
                stack: err.stack 
            });
        } else {
            // Caso seja um erro não previsto, trate como um erro genérico
            console.error('Unexpected error during pet registration:', err);
            response.status(500).send({ 
                error: 'An unexpected error occurred' 
            });
        }
    }
}
