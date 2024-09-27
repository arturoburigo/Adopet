import { Request, Response } from "express";
import { makeRegisterEventUseCase } from "../../use-cases/factories/make-register-event-use-case";

export async function register(req: Request, res: Response) {
    // Verificar o corpo da requisição e o arquivo
    const { title, description, date } = req.body;
    const img = req.file?.filename;

    // Debug para verificar se os dados estão sendo recebidos
    console.log("Received data:", { title, description, img, date });

    // Validações
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
        // Tentar registrar o evento
        const response = await registerEventUseCase.execute({ title, description, img, date });
        return res.status(201).json(response);
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error during event registration:', err);
            return res.status(500).send({ 
                error: 'An error occurred while registering the event', 
                details: err.message, 
                stack: err.stack 
            });
        } else {
            console.error('Unexpected error during event registration:', err);
            return res.status(500).send({ 
                error: 'An unexpected error occurred' 
            });
        }
    }
}
