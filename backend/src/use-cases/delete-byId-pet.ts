import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

interface RegisterPetUseCaseRequest {
    id: string;
}

interface RegisterPetUseCaseResponse {
    pet: Pet;
}

export class DeletePetUseCase {
    constructor(private petsRepository: PetsRepositoryInterface) {}

    async execute({
        id
    }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
        const pet = await this.petsRepository.deletePet(id);
        if (!pet) {
            throw new Error("Pet not found");
        }
        return { pet };
    }
}