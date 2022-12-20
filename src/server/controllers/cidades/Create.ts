import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlawares';

interface ICidade {
  nome: string
}
export const createValitation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3)
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  console.log(req.body);

  return res.status(StatusCodes.CREATED).send('Não implementado');
};