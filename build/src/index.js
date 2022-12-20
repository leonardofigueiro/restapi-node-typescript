"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
require("dotenv/config");
const port = process.env.PORT || 3333;
Server_1.server.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
