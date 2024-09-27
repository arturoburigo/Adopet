import { Request, Response } from "express";
import { z } from "zod";
import { makeSearchEventsUseCase } from "../../use-cases/factories/make-search-events-use-case";

export async function search(request: Request, response: Response){
    const searchEventsQuerySchema = z.object({
        page: z.coerce.number().min(1).default(1),
    });

    const { page } = searchEventsQuerySchema.parse(request.query);
    const searchEventUseCase = makeSearchEventsUseCase();
    const events = await searchEventUseCase.execute({ page: Number(page) });
    return response.status(200).send({events});
}