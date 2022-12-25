import { Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlawares';
import { PessoasProvider } from '../../database/providers/pessoas';

interface IQueryProps {
  id?: number,
  page?: number,
  limit?: number,
  filter?: string
}

export const getAllValitation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
    id: yup.number().integer().notRequired().default(0)

  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

  const result = await PessoasProvider.getAllProvider(req.query.page || 1, req.query.limit||10, req.query.filter||'');
  const count = await PessoasProvider.count(req.query.filter);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: count.message
      }
    });
  }
  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', count);
  return res.status(StatusCodes.OK).json(result);

};