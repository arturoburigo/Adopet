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
exports.PrismaPetsRepository = void 0;
const prisma_1 = require("../../lib/prisma");
class PrismaPetsRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma_1.prisma.pet.create({ data });
            return pet;
        });
    }
    searchMany(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma_1.prisma.pet.findMany({
                take: 20,
                skip: (page - 1) * 20
            });
            return pet;
        });
    }
    searchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma_1.prisma.pet.findUnique({
                where: {
                    id
                }
            });
            return pet;
        });
    }
    deletePet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma_1.prisma.pet.delete({
                where: {
                    id
                }
            });
            return pet;
        });
    }
    editPet(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma_1.prisma.pet.update({
                where: {
                    id
                },
                data
            });
            return pet;
        });
    }
}
exports.PrismaPetsRepository = PrismaPetsRepository;
