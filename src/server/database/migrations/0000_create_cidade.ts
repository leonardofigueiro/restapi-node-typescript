import { Knex } from 'knex';
import { ETableNames } from '../ETablenames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.cidade, table => {
      table.bigIncrements('id').primary().index();
      table.string('nome', 150).checkLength('<=', 150).index().notNullable().unique();
      table.comment('Armazenar as cidades do sistema');

    })
    .then(() => {
      console.log(`#Created table ${ETableNames.cidade}`);
    });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.cidade)
    .then(() => {
      console.log(`#Droped table ${ETableNames.cidade}`);
    });
}

