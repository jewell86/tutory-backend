console.log('Seeding Tutorial Content')

exports.seed = function(knex, Promise) {
  return knex('contents').insert([
    { id: 1, url: "https://www.youtube.com/watch?v=OMOVFvcNfvE", img: "https://images-na.ssl-images-amazon.com/images/I/814X0lSCJQL._SL1412_.jpg" },
    { id: 2, url: "https://www.youtube.com/watch?v=fIHH5-HVS9o" },
    { id: 3, url: "https://www.youtube.com/watch?v=WI3hecGO_04" },
    { id: 4, url: "https://www.youtube.com/watch?v=j1p0_R8ZLB0" },
    { id: 5, url: "https://www.youtube.com/watch?v=CQERFnGvi_A", img: "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg" },
    { id: 6, url: "https://www.youtube.com/watch?v=NBuNDeFjDUY", img: "https://images-na.ssl-images-amazon.com/images/I/518oHwOKn2L._SY445_.jpg" },
    { id: 7, url: "https://www.youtube.com/watch?v=gtTfd6tISfw", img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
    { id: 8, url: "https://www.youtube.com/watch?v=AuzyODgWRp4", }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('contents_id_seq', (SELECT MAX(id) FROM contents))`)
  })
}
