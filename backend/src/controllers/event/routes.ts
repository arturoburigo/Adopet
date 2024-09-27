import { Router } from "express";
import uploadConfig from "../../config/multer";
import { register } from "./register";
import multer from "multer";
import { search } from "./search";
import { deleteEvent } from "./delete";

export async function eventRoutes(router: Router) {
  const upload = multer(uploadConfig.upload("./tmp"));
  router.post("/event", upload.single("img"), register);
  router.get("/event", search);
  router.delete("/event/:id", deleteEvent);
  
}
  