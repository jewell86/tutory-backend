console.log('00-drop')
exports.seed = function(knex, Primuse) {
  return knex('users').del()
    .then(() => {
      knex('tutorials').del()
      knex('comments').del()
      knex('ratings').del()
      knex('users_tutorials').del()
      knex('users_ratings').del()
      knex('tutorials_ratings').del()
    })
}
