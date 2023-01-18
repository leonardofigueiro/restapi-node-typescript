import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios – Create', () => {
  it('Criação de registro de pessoa', async () => {
    
    const res1 = await testServer
      .post('/cadastrar')
      .send({
        nome: 'Teste',
        email: 'testecreate@teste.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criação de um segundo usuário', async () => {
    
    const res1 = await testServer
      .post('/cadastrar')
      .send({
        nome: 'Teste',
        email: 'testecreate2@teste.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criação de usuário com e-mail duplicado', async () => {
    const res1 = await testServer
      .post('/cadastrar')
      .send({
        nome: 'Teste',
        email: 'testecreate23@teste.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');

    const res2 = await testServer
      .post('/cadastrar')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testecreate23@teste.com',
        senha: '1234567'
      });
    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty('errors.default');
  });

  it('Criação de usuário com nome muito curto', async () => {
    const res1 = await testServer
      .post('/cadastrar')
      .send({
        nome: 'Te',
        email: 'testecreate3@teste.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
  it('Criação de usuário sem nome', async () => {
    const res1 = await testServer
      .post('/cadastrar')
      .send({
        email: 'testecreate4@teste.com',
        senha: '1234567'
      });
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });

});