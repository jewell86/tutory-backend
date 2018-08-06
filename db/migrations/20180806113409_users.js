
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.unique.string('username', 50).notNullable()
    table.unique.string('email', 75).notNullable()
    table.string('password', 75).notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
