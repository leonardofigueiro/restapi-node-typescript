import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas – Create', () => {
  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});

    cidadeId = resCidade.body;

  });
  it('Criação de registro de pessoa', async () => {
    
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testecreate@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criação de um segundo registro de pessoa', async () => {
    
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testecreate2@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criação de registro com e-mail duplicado', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testecreate23@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');

    const res2 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testecreate23@teste.com',
        cidadeId
      });
    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty('errors.default');
  });

  it('Criação de registro com nome muito curto', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Te',
        sobrenome: 'Testado',
        email: 'testecreate3@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
  it('Criação de registro sem nome', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        email: 'testecreate3@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });

});