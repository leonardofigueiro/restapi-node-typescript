import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';



export const Delete = async (id: number): Promise<void | Error> => {
  try {
    //o resultado da funcao del retorna um numero. 1 e sucesso. 0 fracasso.
    const result = await Knex(ETableNames.cidade)
      .where('id', '=', id)
      .del();

    if (result > 0) return;
    return new Error('Erro ao apagar o registro');
  } catch (error) {
    console.log(error);
    return Error('Erro ao apagar o registro');
  }
};