
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_ratings', table => {
    table.increments().notNullable()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.integer('ratings_id').notNullable()
    table.foreign('ratings_id').references('ratings.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_ratings')
};
