import { Pet, Prisma } from "@prisma/client";

export interface PetsRepositoryInterface {
    create(data: Prisma.PetCreateInput): Promise<Pet>;
    searchMany(page: number): Promise<Pet[]>;
    searchById(id: string): Promise<Pet | null>;
    deletePet(id: string): Promise<Pet | null>;
    editPet(id: string, data: Prisma.PetUpdateInput): Promise<Pet | null>;
}