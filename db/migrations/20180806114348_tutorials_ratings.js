
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutorials_ratings', table => {
    table.increments().notNullable()
    table.integer('tutorials_id').notNullable()
    table.foreign('tutorials_id').references('tutorials.id').onDelete('CASCADE')
    table.integer('ratings_id').notNullable()
    table.foreign('ratings_id').references('ratings.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutorials_ratings')
};
