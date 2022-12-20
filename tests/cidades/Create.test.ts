import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de criação', () => {
  it('Erro na validação dos dados', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'tg'});
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(typeof res1).toEqual('object');
  });
  it('Inserção dos dados', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
});