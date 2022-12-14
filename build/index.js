"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_js_1 = __importDefault(require("./server/Server.js"));
require("dotenv/config");
const port = process.env.PORT || 3333;
Server_js_1.default.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));