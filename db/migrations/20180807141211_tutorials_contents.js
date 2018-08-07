
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutorials_contents', table => {
    table.increments().notNullable()
    table.integer('tutorials_id').notNullable()
    table.foreign('tutorials_id').references('tutorials.id').onDelete('CASCADE')
    table.integer('contents_id').notNullable()
    table.foreign('contents_id').references('contents.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutorials_contents')
};
