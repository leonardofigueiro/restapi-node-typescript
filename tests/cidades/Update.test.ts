import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de update', () => {
  it('Erro na validação dos dados', async () => {
    const res1 = await testServer
      .put('/cidades/0');
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
  it('Teste de update de um item', async () => {
    await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});
    const res1 = await testServer
      .put('/cidades/1')
      .send({nome: 'Teste'});
    const res2 = await testServer
      .get('/cidades');
    expect(res1.statusCode).toEqual(StatusCodes.ACCEPTED);
    expect(res2.body[0].nome).toEqual('Teste');
  });



});