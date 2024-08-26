import { Prisma, User } from "@prisma/client";

export interface UsersRepositoryInterface {
    create(data: Prisma.UserCreateInput): Promise<User>;
    searchById(id: string): Promise<User | null>;
    searchByEmail(email: string): Promise<User | null>;
}