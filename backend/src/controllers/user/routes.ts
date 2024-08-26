import { Router } from "express"; // Importa Router
import { register } from "./register";
import { authenticate } from "./authenticate";

export async function userRoutes(router: Router) {
  router.post("/register", register);
  router.post("/sessions", authenticate);
}
