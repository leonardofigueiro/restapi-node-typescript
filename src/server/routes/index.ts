import { Router } from 'express';
import { CidadesController, PessoasController } from './../controllers';
import { UsuariosController } from '../controllers/usuarios';
import { ensureAuthenticated } from '../shared/middlawares';

const router = Router();

router.get('/', (_, res) => {
  return res.send('API Rest funcionando.');
});
//rotas de cidades
router.get('/cidades', ensureAuthenticated, CidadesController.getAllValitation, CidadesController.getAll);
router.get('/cidades/:id', ensureAuthenticated, CidadesController.getByIdValitation, CidadesController.getById);
router.post('/cidades', ensureAuthenticated, CidadesController.createValitation, CidadesController.create);
router.delete('/cidades/:id', ensureAuthenticated, CidadesController.deleteValitation, CidadesController.Delete);
router.put('/cidades/:id', ensureAuthenticated, CidadesController.updateValitation, CidadesController.Update);


//rotas de pessoas
router.get('/pessoas', ensureAuthenticated, PessoasController.getAllValitation, PessoasController.getAll);
router.post('/pessoas', ensureAuthenticated, PessoasController.createValitation, PessoasController.create);
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.getByIdValitation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated, PessoasController.updateValitation, PessoasController.Update);
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.deleteValitation, PessoasController.Delete);


//rotas de usuarios
router.post('/entrar', UsuariosController.signInValitation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValitation, UsuariosController.signUp);

export { router };