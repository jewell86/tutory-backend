console.log('Seeding Tutorial Content')

exports.seed = function(knex, Promise) {
  return knex('contents').insert([
    { id: 1, tutorials_id: 1, url: "https://www.youtube.com/watch?v=OMOVFvcNfvE" },
    { id: 2, tutorials_id: 1, url: "https://www.youtube.com/watch?v=fIHH5-HVS9o" },
    { id: 3, tutorials_id: 1, url: "https://www.youtube.com/watch?v=WI3hecGO_04" },
    { id: 4, tutorials_id: 1, url: "https://www.youtube.com/watch?v=j1p0_R8ZLB0" },
    { id: 5, tutorials_id: 2, url: "https://www.youtube.com/watch?v=CQERFnGvi_A" },
    { id: 6, tutorials_id: 3, url: "https://www.youtube.com/watch?v=NBuNDeFjDUY" },
    { id: 7, tutorials_id: 4, url: "https://www.youtube.com/watch?v=gtTfd6tISfw" },
    { id: 8, tutorials_id: 4, url: "https://www.youtube.com/watch?v=AuzyODgWRp4" }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('contents_id_seq', (SELECT MAX(id) FROM contents))`)
  })
}
