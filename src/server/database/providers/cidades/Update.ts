import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';
import { ICidade, IParamsProps } from '../../models';


export const Update = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .update(cidade)
      .where('id', '=', id);

    if (result > 0) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    //implementar salvamento de logs
    console.log(error);
    return Error('Erro ao atualizar o registro');
  }
};