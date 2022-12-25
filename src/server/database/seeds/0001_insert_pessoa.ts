import {Knex} from 'knex';
import { ETableNames } from '../ETablenames';

export const seed = async (knex: Knex) => {

  const [{count}] = await knex(ETableNames.pessoa).count<[{count: number}]>('* as count');
  if(!Number.isInteger(count) || Number(count > 0 )) return;

  const pessoasToInsert = pessoasAleatorias;
  await knex(ETableNames.pessoa)
    .insert(pessoasToInsert
      .map(pessoa => ({
        nome: pessoa.nome,
        sobrenome: pessoa.sobrenome,
        email: pessoa.email,
        cidadeId: pessoa.cidadeId
      })));
};

const pessoasAleatorias = [
  {
    nome: 'Witt ',
    sobrenome: 'Cotton',
    email: 'wittcotton@savvy.com',
    cidadeId: 16
  },
  {
    nome: 'Davenport ',
    sobrenome: 'Osborne',
    email: 'davenportosborne@savvy.com',
    cidadeId: 8
  },
  {
    nome: 'Stuart ',
    sobrenome: 'Melton',
    email: 'stuartmelton@savvy.com',
    cidadeId: 17
  },
  {
    nome: 'Maryanne ',
    sobrenome: 'Jefferson',
    email: 'maryannejefferson@savvy.com',
    cidadeId: 118
  },
  {
    nome: 'Rosario ',
    sobrenome: 'Morton',
    email: 'rosariomorton@savvy.com',
    cidadeId: 62
  },
  {
    nome: 'Noble ',
    sobrenome: 'Scott',
    email: 'noblescott@savvy.com',
    cidadeId: 81
  },
  {
    nome: 'Ginger ',
    sobrenome: 'Garner',
    email: 'gingergarner@savvy.com',
    cidadeId: 92
  }
];