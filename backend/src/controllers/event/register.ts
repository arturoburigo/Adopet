import { Request, Response } from "express";
import { makeRegisterEventUseCase } from "../../use-cases/factories/make-register-event-use-case";

export async function register(req: Request, res: Response) {
    const { title, description, date } = req.body;
    const img = req.file?.filename;

    if (!title) {
        return res.status(400).send({ error: 'Title is required' });
    }
    if (!description) {
        return res.status(400).send({ error: 'Description is required' });
    }
    if (!img) {
        return res.status(400).send({ error: 'At least one image is required' });
    }
    if (!date) {
        return res.status(400).send({ error: 'Date is required' });
    }

    const registerEventUseCase = makeRegisterEventUseCase();
    try {
        const response = await registerEventUseCase.execute({ title, description, img, date });
        return res.status(201).json(response);
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error during pet registration:', err);
            res.status(500).send({ 
                error: 'An error occurred while registering the pet', 
                details: err.message, 
                stack: err.stack 
            });
        } else {
            console.error('Unexpected error during pet registration:', err);
            res.status(500).send({ 
                error: 'An unexpected error occurred' 
            });
        }
    }
}