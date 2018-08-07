console.log('00-drop')
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('ratings').del())
    .then(() => knex('tutorials').del())
    .then(() => knex('comments').del())
    .then(() => knex('users_tutorials').del())
    .then(() => knex('users_ratings').del())
    .then(() => knex('tutorials_ratings').del())
    .then(() => console.log(`Done clearing tables`)
    )

    // Promise.all([knex('users').del(), ])
}
