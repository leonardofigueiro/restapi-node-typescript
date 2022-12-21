import {server} from './server/Server';
import 'dotenv/config';
import { Knex } from './server/database/knex';

const port = process.env.PORT || 3333;

const startServer = () => {

  server.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));

};

if (process.env.IS_LOCALHOST !== 'true') {
  
  Knex.migrate.latest().then(() => {
    startServer();
  })
    .catch(console.log);
} else {
  startServer();
}


