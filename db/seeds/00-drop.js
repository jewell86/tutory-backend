exports.seed = function(knex, Primuse) {
  return knex('users').del()
    .then(() => {
      knex('users').del()
    })
}
