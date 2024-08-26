    import { Router } from "express";
    import { register } from "./register";
    import uploadConfig from "../../config/multer";
    import multer from "multer";
import { search } from "./seach";
import { searchById } from "./searchbyId";


    export async function petsRoutes(router: Router){
        const upload = multer(uploadConfig.upload("./tmp"));

        router.post('/pets', upload.single("petImg"), register);
        router.get('/pets', search);
        router.get('/pets/:id', searchById);
    }