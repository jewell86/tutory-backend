
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contents', table => {
    table.increments().notNullable()
    table.string('url', 255).notNullable()
    table.string('img', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contents')
};
