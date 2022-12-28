import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Teste de update', () => {

  it('Teste de update de um item', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'Tangará da Serraasdf'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/cidades/${res1.body}`)
      .send({nome: 'Teste'});

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);

  });

  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer
      .put('/cidades/9999');

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors');
  });


});