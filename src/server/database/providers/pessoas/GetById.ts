import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';
import { IPessoa } from '../../models';


export const getById = async(id:number): Promise<IPessoa | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select('*')
      .where('id', '=', id)
      .first(); //dessa lista pega só o primeiro resultado
    
    if (result) return result;
    
    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return Error('Registrao não encontrado');
  }
};