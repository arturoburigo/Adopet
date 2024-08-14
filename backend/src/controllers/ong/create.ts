import { Request, Response } from "express";
import { z } from "zod";
import { makeCreateOngUseCase } from "../../use-cases/factories/make-create-ong-use-case";

export async function create(req: Request, res: Response) {
  const createOngBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    whatsapp: z.string(),
    city: z.string(),
    address: z.string(),
    uf: z.string().max(2)
  });
  const { city, email,name,uf,whatsapp, address} = createOngBodySchema.parse(req.body);
  const createOngUseCase = makeCreateOngUseCase();
  const ong = await createOngUseCase.execute({ address,city,email,name,uf,whatsapp });

  return res.status(201).send(ong);
}