import { z } from "zod";
import { makeRegisterUserUseCase } from "../../use-cases/factories/make-user-register";
import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";
import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
    const registerBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
      name: z.string().min(3),
    });
  
    const { email, password, name } = registerBodySchema.parse(req.body);
  
    try {
      const registerUseCase = makeRegisterUserUseCase(); //Factory pattern
  
      await registerUseCase.execute({ email, password, name });
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        res.status(400).json(err.message);
      }
      throw err;
    }
  
    return res.status(201).json({ message: "User created" });
  }
  