import * as create from './Create';
// import * as Delete from './Delete';
import * as getAll from './GetAll';
// import * as getById from './GetById';
// import * as Update  from './Update';

export const PessoasController = {
  ...create,
  ...getAll,
  // ...getById,
  // ...Delete,
  // ...Update
};