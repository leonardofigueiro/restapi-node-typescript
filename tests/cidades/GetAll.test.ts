import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de listagem geral', () => {
  it('Teste de listagem geral', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Teste' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/cidades')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });

});