
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contents', table => {
    table.increments().notNullable()
    table.integer('tutorials_id').notNullable()
    table.foreign('tutorials_id').references('tutorials.id').onDelete('CASCADE')
    table.string('url', 255).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contents')
};
