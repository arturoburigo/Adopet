import { Request, Response } from "express";
import { z } from "zod";
import { makeSearchPetByIdUseCase } from "../../use-cases/factories/make-searchById-pet";

export async function searchById(request: Request, response: Response){
    const searchPetsQuerySchema = z.object({
        petId: z.coerce.string()
      });

    const { petId } = searchPetsQuerySchema.parse(request.query);
    const searchPetUseCase = makeSearchPetByIdUseCase();
    const pet = await searchPetUseCase.execute({ petId });
    return response.status(200).send({pet});
}