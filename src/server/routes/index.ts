import { Router } from 'express';
import httpStatusCodes from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(httpStatusCodes.ACCEPTED).send('API Rest funcionando.');
});

router.post('/cidades', CidadesController.create);

export { router };