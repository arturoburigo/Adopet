"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importStar(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors")); // Importa o pacote cors
const routes_1 = require("./controllers/pets/routes");
const path_1 = __importDefault(require("path"));
const routes_2 = require("./controllers/user/routes");
const routes_3 = require("./controllers/event/routes");
exports.app = (0, express_1.default)();
const router = (0, express_1.Router)();
exports.app.use((0, cors_1.default)()); // Ativa o CORS
exports.app.use(express_1.default.json());
exports.app.use(router);
exports.app.use('/events', routes_3.eventRoutes);
exports.app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
(0, routes_1.petsRoutes)(router);
(0, routes_2.userRoutes)(router);
(0, routes_3.eventRoutes)(router);
exports.app.use((error, request, response, next) => {
    console.error('Error occurred:', error);
    return response.status(500).json({
        message: "Internal server error",
        error: error.message
    });
});
