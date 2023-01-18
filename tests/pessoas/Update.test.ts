import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas - Update', () => {
  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serra'});

    cidadeId = resCidade.body;

  });

  it('Teste de update de um item', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testeupdate@teste.com',
        cidadeId
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/pessoas/${res1.body}`)
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testeupdate@teste.com',
        cidadeId
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);

  });

  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer
      .put('/pessoas/9999')
      .send({
        nome: 'Teste',
        sobrenome: 'Testado',
        email: 'testeupdate@teste.com',
        cidadeId
      })
      
      ;

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors');
  });


});