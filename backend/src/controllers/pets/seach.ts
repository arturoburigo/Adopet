import { Request, Response } from "express";
import { makeSearchPetUseCase } from "../../use-cases/factories/make-search-pets";
import { z } from "zod";

export async function search(request: Request, response: Response){
    const searchPetsQuerySchema = z.object({
        page: z.coerce.number().min(1).default(1),
      });

    const { page } = searchPetsQuerySchema.parse(request.query);
    const searchPetUseCase = makeSearchPetUseCase();
    const pets = await searchPetUseCase.execute({ page: Number(page) });
    return response.status(200).send({pets});
}