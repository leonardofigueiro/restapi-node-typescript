import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';
import { ICidade } from '../../models';


export const Update = async (id: number, pessoa: Omit<ICidade, 'id'>): Promise<void | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.cidade)
      .where('id', '=', id)
      .count<[{ count: number}]>('* as count');

    if(count === 0 ) {
      return new Error('A cidade usada no cadastro não foi encontrada');
    }

    const result = await Knex(ETableNames.pessoa)
      .update(pessoa)
      .where('id', '=', id);

    if (result > 0) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    //implementar salvamento de logs
    console.log(error);
    return Error('Erro ao atualizar o registro');
  }
};