
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_tutorials', table => {
    table.increments().notNullable()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.integer('tutorials_id').notNullable()
    table.foreign('tutorials_id').references('tutorials.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_tutorials')
};
