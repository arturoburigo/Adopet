import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { PetsRepositoryInterface } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepositoryInterface {
    async create(data: Prisma.PetCreateInput) {
        const pet = await prisma.pet.create({data})
        return pet;
    }
}