import { ETableNames } from '../../ETablenames';
import { Knex } from '../../knex';
import { IUsuario } from '../../models';


export const getByEmail = async(email:string): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('email', '=', email)
      .first(); //dessa lista pega só o primeiro resultado
    if (result) return result;
    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return Error('Registrao não encontrado');
  }
};