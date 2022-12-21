import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de listagem geral', () => {
  it('Teste de listagem geral', async () => {
    await testServer
      .post('/cidades')
      .send({ nome: 'Teste' });
    await testServer
      .post('/cidades')
      .send({ nome: 'Teste2' });
    const res2 = await testServer
      .get('/cidades');
    expect(typeof res2.body).toEqual('object');
    expect(res2.body.length).toEqual(2);
  });
  it('Teste de falha da query limit', async () => {
    const res = await testServer
      .get('/cidades?limit=0');
    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
  it('Teste da query limit', async () => {
    const res = await testServer
      .get('/cidades?limit=1');
    expect(res.statusCode).toEqual(StatusCodes.ACCEPTED);
    expect(res.body.length).toEqual(1);
  });

});