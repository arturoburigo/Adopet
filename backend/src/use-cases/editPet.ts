import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

export enum PetSize {
    "small",
    "medium",
    "large"
}

export enum PetGender {
    "F",
    "M"
}

interface EditPetUseCaseRequest {
    id: string;
    name: string;
    age: string;
    breed: string;
    size: PetSize;
    about: string;
    castrate: boolean;
    vacinated: boolean;
    whatsapp: string;
    sex: PetGender;
}

interface EditPetUseCaseResponse {
    pet: Pet | null;  
}

export class EditPetUseCase {
    constructor(private petsRepository: PetsRepositoryInterface) {}

    async execute({
        id, 
        name,
        age,
        about,
        breed,
        castrate,
        size,
        vacinated,
        whatsapp,
    }: EditPetUseCaseRequest): Promise<EditPetUseCaseResponse> {
        const pet = await this.petsRepository.editPet(id, {
            about,
            age,
            breed,
            castrate,
            name,
            size: PetSize[size],
            sex: PetGender[size],
            vacinated,
            whatsapp
        });

        return { pet };
    }
}
