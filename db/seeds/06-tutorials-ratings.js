console.log("Seeding Tutorial Ratings")

exports.seed = function(knex, Promise) {
  return knex('tutorials_ratings').insert([
    { id: 1, tutorials_id: 1, ratings_id: 1 },
    { id: 2, tutorials_id: 1, ratings_id: 2 },
    { id: 3, tutorials_id: 1, ratings_id: 3 },
    { id: 4, tutorials_id: 2, ratings_id: 4 },
    { id: 5, tutorials_id: 2, ratings_id: 5 },
    { id: 6, tutorials_id: 2, ratings_id: 6 },
    { id: 7, tutorials_id: 3, ratings_id: 7 },
    { id: 8, tutorials_id: 4, ratings_id: 8 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('tutorials_ratings_id_seq', (SELECT MAX(id) FROM tutorials_ratings))`)
  })
}
