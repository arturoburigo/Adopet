import express, { Router, Request, Response } from 'express';
import { ongRoutes } from './controllers/ong/routes';
import "express-async-errors";
import { ZodError } from "zod";


export const app = express();
const router = Router();
app.use(express.json());
ongRoutes(router)
app.use(router)
app.use((error: Error, request: Request, response: Response) => {
    if (error instanceof ZodError) {
      return response.status(400).json({ 
        message: "Validation error", 
        issues: error.format() 
      });
    }
    return response.status(500).json({ message: "Internal server error" });
  });