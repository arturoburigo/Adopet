import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

export enum PetSize {
    "small",
    "medium",
    "large"
}

export enum PetGender {
    F = "F",
    M = "M"
}


interface RegisterPetUseCaseRequest {
    name: string;
    age: string;
    breed: string;
    size: PetSize;
    about: string;
    petImg: string;
    castrate: boolean;
    vacinated: boolean;
    whatsapp: string;
    sex: PetGender
}

interface RegisterPetUseCaseResponse {
    pet: Pet;
}

export class RegisterPetUseCase {
    constructor(private petsRepository: PetsRepositoryInterface) {}

    async execute({
        name,
        age,
        about,
        breed,
        castrate,
        petImg,
        size,
        vacinated,
        whatsapp,
        sex
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petsRepository.create({
            about,
            age,
            breed,
            castrate,
            name,
            size: PetSize[size],
            sex: sex,
            petImg,
            vacinated,
            whatsapp
        });

        return { pet }
    }
}
