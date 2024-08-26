import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

interface SearchByIdPetUseCaseRequest {
    petId: string;
}

interface SearchByIdPetUseCaseResponse {
    pet: Pet;
}

export class SearchByIdPetUseCase {
    constructor(private petsRepository: PetsRepositoryInterface) {}

    async execute({ petId }: SearchByIdPetUseCaseRequest): Promise<SearchByIdPetUseCaseResponse> {
        const pet = await this.petsRepository.searchById(petId);

        if (!pet) {
            throw new Error("Pet not found");
        }

        return {pet}; 
    }
}