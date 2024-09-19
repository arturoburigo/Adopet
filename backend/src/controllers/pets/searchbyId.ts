import { Request, Response } from "express";
import { z } from "zod";
import { makeSearchPetByIdUseCase } from "../../use-cases/factories/make-searchById-pet";

export async function searchById(request: Request, response: Response) {
    const searchPetsParamSchema = z.object({
        petId: z.string()
    });

    try {
        // Acessa petId a partir de request.params
        const { petId } = searchPetsParamSchema.parse(request.params);

        const searchPetUseCase = makeSearchPetByIdUseCase();
        const pet = await searchPetUseCase.execute({ petId });

        if (!pet) {
            return response.status(404).send({
                message: "Pet not found"
            });
        }

        return response.status(200).send({ pet });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error searching pet by ID:', error);
            return response.status(500).send({
                message: "Internal server error",
                error: error.message
            });
        } else {
            console.error('Unknown error:', error);
            return response.status(500).send({
                message: "Internal server error",
                error: "An unknown error occurred"
            });
        }
    }
}
