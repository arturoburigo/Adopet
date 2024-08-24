    import { Router } from "express";
    import { register } from "./register";
    import uploadConfig from "../../config/multer";
    import multer from "multer";


    export async function petsRoutes(router: Router){
        const upload = multer(uploadConfig.upload("./tmp"));

        router.post('/pets', upload.single("petImg"), register);
    }