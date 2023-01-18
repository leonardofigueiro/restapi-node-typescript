import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios – SignIn', () => {
  beforeAll(async () => {
    await testServer
      .post('/cadastrar')
      .send({
        nome: 'Jorge',
        senha: '123456',
        email: 'jorge@gmail.com'
      });
  });
  it('Faz login', async () => {
    
    const res1 = await testServer
      .post('/entrar')
      .send({
        email: 'jorge@gmail.com',
        senha: '123456'
      });
    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body).toHaveProperty('accessToken');
  });

  it('Senha errada', async () => {
    
    const res1 = await testServer
      .post('/entrar')
      .send({
        email: 'jorge@gmail.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(res1.body).toHaveProperty('errors.default');
  });
});