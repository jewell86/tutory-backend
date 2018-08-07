
exports.seed = function(knex, Promise) {
  return knex('tutorials_contents').insert([
    { id: 1, tutorials_id: 1, contents_id: 1 },
    { id: 2, tutorials_id: 1, contents_id: 2 },
    { id: 3, tutorials_id: 1, contents_id: 3 },
    { id: 4, tutorials_id: 1, contents_id: 4 },
    { id: 5, tutorials_id: 2, contents_id: 5 },
    { id: 6, tutorials_id: 3, contents_id: 6 },
    { id: 7, tutorials_id: 4, contents_id: 7 },
    { id: 8, tutorials_id: 4, contents_id: 8 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('tutorials_contents_id_seq', (SELECT MAX(id) FROM tutorials_contents))`)
  })
}
