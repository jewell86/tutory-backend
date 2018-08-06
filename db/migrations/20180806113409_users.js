
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username', 50).notNullable()
    table.string('email', 75).notNullable()
    table.string('password', 75).notNullable()
    
    table.unique('username')
    table.unique('email')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
