import express from 'express';
import { router } from './routes';

interface Teste {

}

const server = express();
server.use(express.json());
server.use(router);

export default server;