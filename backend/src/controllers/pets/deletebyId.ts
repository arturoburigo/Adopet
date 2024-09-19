import { Request, Response } from "express";
import { z } from "zod";
import { makeDeletePetByIdUseCase } from "../../use-cases/factories/make-deleteById-pet";

export async function deletePetById(request: Request, response: Response){
    const deletePetByIdQuerySchema = z.object({
        id: z.coerce.string()
      });

    const { id } = deletePetByIdQuerySchema.parse(request.params);
    const deletePetUseCase = makeDeletePetByIdUseCase();
    const pet = await deletePetUseCase.execute({ id });
    return response.status(201).send({message: "Pet deleted successfully"});
}