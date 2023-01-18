import { Router } from 'express';
import { CidadesController, PessoasController } from './../controllers';
import { UsuariosController } from '../controllers/usuarios';

const router = Router();

router.get('/', (_, res) => {
  return res.send('API Rest funcionando.');
});
//rotas de cidades
router.get('/cidades', CidadesController.getAllValitation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValitation, CidadesController.getById);
router.post('/cidades', CidadesController.createValitation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteValitation, CidadesController.Delete);
router.put('/cidades/:id', CidadesController.updateValitation, CidadesController.Update);


//rotas de pessoas
router.get('/pessoas', PessoasController.getAllValitation, PessoasController.getAll);
router.post('/pessoas', PessoasController.createValitation, PessoasController.create);
router.get('/pessoas/:id', PessoasController.getByIdValitation, PessoasController.getById);
router.put('/pessoas/:id', PessoasController.updateValitation, PessoasController.Update);
router.delete('/pessoas/:id', PessoasController.deleteValitation, PessoasController.Delete);


//rotas de usuarios
router.post('/entrar', UsuariosController.signInValitation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValitation, UsuariosController.signUp);

export { router };