import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas - Delete', () => {
  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});

    cidadeId = resCidade.body;

  });
  it('Teste na exclusão de um item', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testedelete@teste.com',
        cidadeId
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/pessoas/${res1.body}`)
      .send();
    
    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  
  it('Tentativa de apagar registro inexistente', async () => {
    const res1 = await testServer
      .delete('/pessoas/9999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });


});