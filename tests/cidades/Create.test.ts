import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de criação', () => {

  it('Criação de registro', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Criação de registro muito curto', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'tg'});
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});