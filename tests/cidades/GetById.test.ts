import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de listagem por ID', () => {
  it('Erro na validação dos dados', async () => {
    const res1 = await testServer
      .get('/cidades/0');
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(typeof res1).toEqual('object');
  });
  it('Teste de listagem por ID', async () => {
    await testServer
      .post('/cidades')
      .send({nome: 'Teste'});
    const res2 = await testServer
      .get('/cidades/1');

    expect(typeof res2.body).toEqual('object');
    console.log(res2.body);
    expect(res2.body[0].nome).toEqual('Teste');
    

  });
});