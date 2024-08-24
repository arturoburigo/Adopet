import express, { Router, Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { petsRoutes } from './controllers/pets/routes';
import path from 'path';
import multer from 'multer';

export const app = express();
const router = Router();

app.use(express.json());
app.use(router);
petsRoutes(router);
app.use('/files', express.static(path.resolve(__dirname,'..', 'tmp')));
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.error('Error occurred:', error);
  return response.status(500).json({ 
      message: "Internal server error", 
      error: error.message 
  });
});
