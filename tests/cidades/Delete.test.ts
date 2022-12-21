import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de exclusão', () => {
  it('Erro na validação dos dados', async () => {
    const res1 = await testServer
      .delete('/cidades/0');
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
  it('Teste na exclusão de um item', async () => {
    await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});
    const res1 = await testServer
      .delete('/cidades/1');
    const res2 = await testServer
      .get('/cidades');
    expect(res1.statusCode).toEqual(StatusCodes.ACCEPTED);
    expect(res2.body.length).toEqual(0);
  });



});