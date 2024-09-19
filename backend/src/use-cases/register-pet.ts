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
        whatsapp
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petsRepository.create({
            about,
            age,
            breed,
            castrate,
            name,
            size: PetSize[size],
            sex: PetGender[size],
            petImg,
            vacinated,
            whatsapp
        });

        return { pet }
    }
}
