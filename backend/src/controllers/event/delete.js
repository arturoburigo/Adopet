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
exports.deleteEvent = deleteEvent;
const zod_1 = require("zod");
const make_delete_event_use_case_1 = require("../../use-cases/factories/make-delete-event-use-case");
function deleteEvent(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteEventQuerySchema = zod_1.z.object({
            id: zod_1.z.coerce.string()
        });
        const { id } = deleteEventQuerySchema.parse(request.params);
        const deleteEventUseCase = (0, make_delete_event_use_case_1.makeDeleteEventUseCase)();
        const event = yield deleteEventUseCase.execute({ id });
        return response.status(201).send({ message: "Event deleted successfully" });
    });
}
