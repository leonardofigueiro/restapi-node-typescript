import * as create from './Create';
import * as Delete from './Delete';
import * as getAllProvider from './GetAll';
import * as getById from './GetById';
import * as Update  from './Update';
import * as Count from './Count';

export const CidadesProvider = {
  ...create,
  ...getAllProvider,
  ...getById,
  ...Delete,
  ...Update,
  ...Count
};