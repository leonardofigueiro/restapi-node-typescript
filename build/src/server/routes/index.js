"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.status(http_status_codes_1.default.ACCEPTED).send('API Rest funcionando.');
});
router.get('/cidades', controllers_1.CidadesController.getAllValitation, controllers_1.CidadesController.getAll);
router.get('/cidades/:id', controllers_1.CidadesController.getByIdValitation, controllers_1.CidadesController.getById);
router.post('/cidades', controllers_1.CidadesController.createValitation, controllers_1.CidadesController.create);
router.delete('/cidades/:id', controllers_1.CidadesController.deleteValitation, controllers_1.CidadesController.Delete);
router.put('/cidades/:id', controllers_1.CidadesController.updateValitation, controllers_1.CidadesController.Update);
