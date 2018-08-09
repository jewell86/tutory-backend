console.log("Seeding Tutorial Ratings")

exports.seed = function(knex, Promise) {
  return knex('tutorials_ratings').insert([
    { id: 1, tutorials_id: 1, ratings_id: 1 },
    { id: 2, tutorials_id: 31, ratings_id: 3 },
    { id: 3, tutorials_id: 14, ratings_id: 1 },
    { id: 4, tutorials_id: 2, ratings_id: 2 },
    { id: 5, tutorials_id: 13, ratings_id: 1 },
    { id: 6, tutorials_id: 12, ratings_id: 4 },
    { id: 7, tutorials_id: 3, ratings_id: 1 },
    { id: 8, tutorials_id: 11, ratings_id: 4 },
    { id: 9, tutorials_id: 10, ratings_id: 2 },
    { id: 10, tutorials_id: 9, ratings_id: 1 },
    { id: 11, tutorials_id: 9, ratings_id: 2 },
    { id: 12, tutorials_id: 7, ratings_id: 1 },
    { id: 13, tutorials_id: 6, ratings_id: 2 },
    { id: 14, tutorials_id: 5, ratings_id: 1 },
    { id: 15, tutorials_id: 4, ratings_id: 4 },
    { id: 16, tutorials_id: 30, ratings_id: 2 },
    { id: 17, tutorials_id: 29, ratings_id: 1 },
    { id: 18, tutorials_id: 28, ratings_id: 2 },
    { id: 19, tutorials_id: 27, ratings_id: 1 },
    { id: 20, tutorials_id: 26, ratings_id: 4 },
    { id: 21, tutorials_id: 25, ratings_id: 1 },
    { id: 22, tutorials_id: 24, ratings_id: 2 },
    { id: 23, tutorials_id: 23, ratings_id: 1 },
    { id: 24, tutorials_id: 22, ratings_id: 2 },
    { id: 25, tutorials_id: 21, ratings_id: 1 },
    { id: 26, tutorials_id: 20, ratings_id: 4 },
    { id: 27, tutorials_id: 19, ratings_id: 1 },
    { id: 28, tutorials_id: 18, ratings_id: 4 },
    { id: 29, tutorials_id: 17, ratings_id: 2 },
    { id: 30, tutorials_id: 16, ratings_id: 1 },
    { id: 31, tutorials_id: 15, ratings_id: 2 },
    { id: 32, tutorials_id: 14, ratings_id: 1 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('tutorials_ratings_id_seq', (SELECT MAX(id) FROM tutorials_ratings))`)
  })
}
