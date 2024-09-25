import { Router } from "express"; // Importa Router
import { register } from "./register";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export async function eventRoutes(router: Router) {
  router.post("/event", register, isAuthenticated);
}
