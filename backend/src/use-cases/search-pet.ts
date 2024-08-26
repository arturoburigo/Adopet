import { Pet } from "@prisma/client";
import { PetsRepositoryInterface } from "../repositories/pets-repository";

interface searchPetUseCaseRequest {
    page: number;
}

interface searchPetUseCaseResponse {
    pets: Pet[];
}

export class SearchPetUseCase {
    constructor(private petsRepository: PetsRepositoryInterface) {}

    async execute({ page }: searchPetUseCaseRequest): Promise<searchPetUseCaseResponse> {
        const pets = await this.petsRepository.searchMany(page);

        return { pets }
    }
}