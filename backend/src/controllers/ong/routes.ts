import { Router } from "express";
import { create } from "./create";

export async function ongRoutes(router: Router) {
    router.post("/ong/create", create)
}