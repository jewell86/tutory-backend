
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', table => {
    table.increments().notNullable()
    table.integer('value').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings')
};
