import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas - GetAll', () => {
  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});

    cidadeId = resCidade.body;

  });

  it('Teste de listagem geral', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testegetall@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/pessoas')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });

});