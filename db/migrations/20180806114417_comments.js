
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments().notNullable()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.integer('tutorials_id').notNullable()
    table.foreign('tutorials_id').references('tutorials.id').onDelete('CASCADE')
    table.string('content', 255).notNullable(),
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
