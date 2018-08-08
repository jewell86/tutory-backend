
exports.seed = function(knex, Promise) {
  return knex('users_ratings').insert([
    { id: 1, users_id: 1, ratings_id: 1 },
    { id: 2, users_id: 1, ratings_id: 2 },
    { id: 3, users_id: 1, ratings_id: 3 },
    { id: 4, users_id: 2, ratings_id: 4 },
    { id: 5, users_id: 2, ratings_id: 5 },
    { id: 6, users_id: 2, ratings_id: 6 },
    { id: 7, users_id: 3, ratings_id: 7 },
    { id: 8, users_id: 4, ratings_id: 8 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_ratings_id_seq', (SELECT MAX(id) FROM users_ratings))`)
  })
}