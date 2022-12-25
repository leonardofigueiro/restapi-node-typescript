import { Router } from 'express';
import httpStatusCodes from 'http-status-codes';

import { CidadesController, PessoasController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(httpStatusCodes.ACCEPTED).send('API Rest funcionando.');
});

router.get('/cidades', CidadesController.getAllValitation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValitation, CidadesController.getById);
router.post('/cidades', CidadesController.createValitation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteValitation, CidadesController.Delete);
router.put('/cidades/:id', CidadesController.updateValitation, CidadesController.Update);

router.get('/pessoas', PessoasController.getAllValitation, PessoasController.getAll);
router.post('/pessoas', PessoasController.createValitation, PessoasController.create);


export { router };