import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cidades - Delete', () => {

  it('Deleta registro', async () => {
    const res1 = await testServer
      .delete('/cidades/1');

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.text).toEqual('Não implementado');

  });
});