import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

export enum PetSize {
    "small",
    "medium",
    "large"
}

interface RegisterPetUseCaseRequest {
    name: string;
    age: string;
    breed: string;
    size: PetSize;
    about: string;
    petImg: string;
    castrate: boolean;
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
        size
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petsRepository.create({
            about,
            age,
            breed,
            castrate,
            name,
            size: PetSize[size],
            petImg
        });

        return { pet }
    }
}
