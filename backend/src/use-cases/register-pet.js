"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPetUseCase = exports.PetGender = exports.PetSize = void 0;
var PetSize;
(function (PetSize) {
    PetSize[PetSize["small"] = 0] = "small";
    PetSize[PetSize["medium"] = 1] = "medium";
    PetSize[PetSize["large"] = 2] = "large";
})(PetSize || (exports.PetSize = PetSize = {}));
var PetGender;
(function (PetGender) {
    PetGender["F"] = "F";
    PetGender["M"] = "M";
})(PetGender || (exports.PetGender = PetGender = {}));
class RegisterPetUseCase {
    constructor(petsRepository) {
        this.petsRepository = petsRepository;
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, age, about, breed, castrate, petImg, size, vacinated, whatsapp, sex }) {
            const pet = yield this.petsRepository.create({
                about,
                age,
                breed,
                castrate,
                name,
                size: PetSize[size],
                sex: sex,
                petImg,
                vacinated,
                whatsapp
            });
            return { pet };
        });
    }
}
exports.RegisterPetUseCase = RegisterPetUseCase;
