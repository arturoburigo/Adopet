import { Pet, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { PetsRepositoryInterface } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepositoryInterface {
    async create(data: Prisma.PetCreateInput) {
        const pet = await prisma.pet.create({data})
        return pet;
    }
    async searchMany(page: number) {
        const pet = await prisma.pet.findMany({
            take: 20,
            skip: (page - 1) * 20
        })
        return pet;
    }
    async searchById(id: string){
        const pet = await prisma.pet.findUnique({
            where: {
                id
            }
        })
        return pet;
    }
}