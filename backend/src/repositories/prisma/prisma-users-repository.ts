import { Prisma, User } from "@prisma/client";
import { UsersRepositoryInterface } from "../users-repository";
import { prisma } from "../../lib/prisma";

export class PrismaUsersRepository implements UsersRepositoryInterface {
    async create(data: Prisma.UserCreateInput) {
        const user = prisma.user.create({data})

        return user;
    }

    async searchById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user;
    }

    async searchByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user;
    }

}