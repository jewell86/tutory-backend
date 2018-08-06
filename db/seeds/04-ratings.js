console.log('04-ratings')
exports.seed = function(knex, Promise) {
  return knex('ratings').insert([
    { id: 1, value: 4 },
    { id: 2, value: 5 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
    { id: 5, value: 5 },
    { id: 6, value: 3 },
    { id: 7, value: 4 },
    { id: 8, value: 5 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('ratings_id_seq', (SELECT MAX(id) FROM ratings))`)
  })
}
