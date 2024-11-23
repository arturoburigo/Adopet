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
exports.register = register;
const make_register_event_use_case_1 = require("../../use-cases/factories/make-register-event-use-case");
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Verificar o corpo da requisição e o arquivo
        const { title, description, date } = req.body;
        const img = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        // Debug para verificar se os dados estão sendo recebidos
        console.log("Received data:", { title, description, img, date });
        // Validações
        if (!title) {
            return res.status(400).send({ error: 'Title is required' });
        }
        if (!description) {
            return res.status(400).send({ error: 'Description is required' });
        }
        if (!img) {
            return res.status(400).send({ error: 'At least one image is required' });
        }
        if (!date) {
            return res.status(400).send({ error: 'Date is required' });
        }
        const registerEventUseCase = (0, make_register_event_use_case_1.makeRegisterEventUseCase)();
        try {
            // Tentar registrar o evento
            const response = yield registerEventUseCase.execute({ title, description, img, date });
            return res.status(201).json(response);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('Error during event registration:', err);
                return res.status(500).send({
                    error: 'An error occurred while registering the event',
                    details: err.message,
                    stack: err.stack
                });
            }
            else {
                console.error('Unexpected error during event registration:', err);
                return res.status(500).send({
                    error: 'An unexpected error occurred'
                });
            }
        }
    });
}
