import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de listagem por ID', () => {

  it('Teste de listagem por ID', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'Teste'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/cidades/${res1.body}`)
      .send();

    expect(resBuscada).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  
  });
  it('Tenta buscar registro que não existe', async () => {
    const res1 = await testServer
      .get('/cidades/9999');
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});