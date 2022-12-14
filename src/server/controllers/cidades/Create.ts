import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  nome: string
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3)
});

export const create = async (req: Request<{}, {}, ICidade>, res:Response) => {

  const data: ICidade = req.body;
  let validateData: ICidade | undefined = undefined;
  try {
    validateData = await bodyValidation.validate(data, {abortEarly:false});
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if(error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });


    return res.status(StatusCodes.BAD_REQUEST).json({validationErrors});
  }
  console.log(validateData);

  return res.send('Create');
};