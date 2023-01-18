import express from 'express';
import { router } from './routes';
import './shared/services/TranslationsYup';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './shared/documentation/swagger.json';

interface Teste {

}

const server = express();

//server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


server.use(express.json());
server.use(router);

export {server};