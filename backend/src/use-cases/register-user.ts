import { User } from "@prisma/client";
import { UsersRepositoryInterface } from "../repositories/users-repository";
import { hash } from "bcryptjs";

interface RegisterUserUseCaseRequest {
    email: string;
    password: string;
    name: string;
}

interface RegisterUseCaseResponse {
    user: User;
}

export class RegisterUserUseCase {
    constructor(private usersRepository: UsersRepositoryInterface) {}

    async execute({
        email,
        password,
        name
    }: RegisterUserUseCaseRequest): Promise<RegisterUseCaseResponse> {
        const password_hash = await hash(password, 8)
        const userWithSameEmail = await this.usersRepository.searchByEmail(email);

        if (userWithSameEmail) {
            throw new Error("User already exists");
        }

        const user = await this.usersRepository.create({
            email,
            password_hash,
            name
        });

        return { user };
    }
}           