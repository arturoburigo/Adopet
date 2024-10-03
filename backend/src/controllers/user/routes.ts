import { Router } from "express"; // Importa Router
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refreshToken } from "./refreshToken";

export async function userRoutes(router: Router) {
  router.post("/register", register);
  router.post("/sessions", authenticate);
  router.post("/refresh-token", refreshToken);
}
