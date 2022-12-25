import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';
import { IPessoa } from '../../models';

export const getAllProvider = async (page: number, limit: number, filter: string): Promise<IPessoa[] | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select('*')
      .where('sobrenome', 'like', `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    return result;
  } catch (error) {
    console.log(error);
    return Error('Erro ao consultar os registros');
  }
};