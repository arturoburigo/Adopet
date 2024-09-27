import { Request, Response } from "express";
import { z } from "zod"
import { makeDeleteEventUseCase } from "../../use-cases/factories/make-delete-event-use-case";

export async function deleteEvent(request: Request, response: Response) {
    const deleteEventQuerySchema = z.object({
        id: z.coerce.string()
    })
    const {id} = deleteEventQuerySchema.parse(request.params)
    const deleteEventUseCase = makeDeleteEventUseCase()
    const event = await deleteEventUseCase.execute({id})
    return response.status(201).send({message: "Event deleted successfully"})

}
