import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas - GetById', () => {

  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});

    cidadeId = resCidade.body;

  });


  it('Teste de listagem por ID', async () => {
    
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testegetbyid@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/pessoas/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  
  });

  it('Tenta buscar registro que não existe', async () => {
    const res1 = await testServer
      .get('/pessoas/9999');
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});