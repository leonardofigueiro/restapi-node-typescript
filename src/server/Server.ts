import express from 'express';
import { router } from './routes';
import './shared/services/TranslationsYup.js';
interface Teste {

}

const server = express();
server.use(express.json());
server.use(router);

export {server};