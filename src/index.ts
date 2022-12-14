import { server } from './server/server';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

server.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));