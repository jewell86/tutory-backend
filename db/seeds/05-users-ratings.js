
exports.seed = function(knex, Promise) {
  return knex('users_ratings').insert([
    { id: 1, users_id: 1, ratings_id: 1 },
    { id: 2, users_id: 1, ratings_id: 3 },
    { id: 3, users_id: 14, ratings_id: 1 },
    { id: 4, users_id: 2, ratings_id: 2 },
    { id: 5, users_id: 13, ratings_id: 1 },
    { id: 6, users_id: 12, ratings_id: 4 },
    { id: 7, users_id: 3, ratings_id: 1 },
    { id: 8, users_id: 11, ratings_id: 4 },
    { id: 9, users_id: 10, ratings_id: 2 },
    { id: 10, users_id: 9, ratings_id: 1 },
    { id: 11, users_id: 8, ratings_id: 2 },
    { id: 12, users_id: 7, ratings_id: 1 },
    { id: 13, users_id: 6, ratings_id: 2 },
    { id: 14, users_id: 5, ratings_id: 1 },
    { id: 15, users_id: 4, ratings_id: 4 },
    { id: 16, users_id: 13, ratings_id: 2 },
    { id: 17, users_id: 8, ratings_id: 1 },
    { id: 18, users_id: 5, ratings_id: 2 },
    { id: 19, users_id: 2, ratings_id: 1 },
    { id: 20, users_id: 12, ratings_id: 4 },
    { id: 21, users_id: 4, ratings_id: 1 },
    { id: 22, users_id: 7, ratings_id: 2 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_ratings_id_seq', (SELECT MAX(id) FROM users_ratings))`)
  })
}