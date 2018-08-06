console.log('02-tutorials')
exports.seed = function(knex, Promise) {
  return knex('tutorials').insert([
    { id: 1, users_id: 1, title: 'Cooking 101', description: 'Intro to cooking' },
    { id: 2, users_id: 1, title: 'Breathing 101', description: 'Intro to breathing', rating: 5 },
    { id: 3, users_id: 1, title: 'Swimming 101' },
    { id: 4, users_id: 2, title: 'Reading 101', description: 'Intro to reading', rating: 2 },
    { id: 5, users_id: 4, title: 'Smiling 101', rating: 4 },
    { id: 6, users_id: 4, title: 'Smiling 201', rating: 4 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('tutorials_id_seq', (SELECT MAX(id) FROM tutorials))`)
  })
}
