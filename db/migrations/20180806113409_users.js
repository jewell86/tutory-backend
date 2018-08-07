
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username', 50).notNullable()
    table.string('email', 75).notNullable()
    table.string('password', 75).notNullable()
    table.string('photo_url', 255)
    table.string('first_name', 75)
    table.string('last_name', 75)
    table.text('about_me')
    table.boolean('public').defaultTo(true)

    table.unique('username')
    table.unique('email')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
