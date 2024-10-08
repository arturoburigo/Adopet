import { User } from "@prisma/client";
import { UsersRepositoryInterface } from "../repositories/users-repository";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";
import { compare } from "bcryptjs";

interface AuthenticateUseCaseRequest {
    email: string;
    password: string;
}

interface AuthenticateUseCaseResponse {
    user: User;
}

export class AuthenticateUseCase {
    constructor(private usersRepository: UsersRepositoryInterface) {}
  
    async execute({
      email,
      password,
    }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
      const user = await this.usersRepository.searchByEmail(email);
  
      if (!user) {
        throw new InvalidCredentialsError();
      }
  
      const passwordMatchValidation = await compare(password, user.password_hash);
  
      if (!passwordMatchValidation) {
        throw new InvalidCredentialsError();
      }
  
      return {
        user,
      };
    }
  }