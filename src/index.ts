import server from './server/Server.js';
import 'dotenv/config';

const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));