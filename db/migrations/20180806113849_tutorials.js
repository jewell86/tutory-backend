
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutorials', table => {
    table.increments().notNullable()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.string('title', 75).notNullable()
    table.text('description')
    table.integer('rating')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutorials')
};
