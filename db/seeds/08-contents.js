console.log('Seeding Tutorial Content')

exports.seed = function(knex, Promise) {
  return knex('contents').insert([
    { id: 1, tutorials_id: 3, url: "https://www.youtube.com/embed/vIZBYUiJTxo" },
    { id: 2, tutorials_id: 3, url: "https://www.youtube.com/embed/WreddX9aeGw" },
    { id: 3, tutorials_id: 9, url: "https://www.youtube.com/embed/-WlqBjKC0C8" },
    { id: 4, tutorials_id: 9, url: "https://www.youtube.com/embed/1izqnjl568o" },
    { id: 5, tutorials_id: 9, url: "https://www.youtube.com/embed/pyvNw2Tk4bw" },
    { id: 6, tutorials_id: 10, url: "https://www.youtube.com/embed/-HzISXBMybY" },
    { id: 7, tutorials_id: 10, url: "https://www.youtube.com/embed/08bLWUkCrJg" },
    { id: 8, tutorials_id: 1, url: "https://www.youtube.com/embed/ZJy1ajvMU1k" },
    { id: 9, tutorials_id: 2, url: "https://www.youtube.com/embed/ZCsNGVeDhFs" },
    { id: 10, tutorials_id: 2, url: "https://www.youtube.com/embed/VcCuRCCWQU0" },
    { id: 11, tutorials_id: 4, url: "https://www.youtube.com/embed/70hoV-YYRkE" },
    { id: 12, tutorials_id: 4, url: "https://www.youtube.com/embed/NH_u6II5dJU" },
    { id: 13, tutorials_id: 5, url: "https://www.youtube.com/embed/fy3q0wlal_0" },
    { id: 14, tutorials_id: 5, url: "https://www.youtube.com/embed/aJjnNix-Lp8" },
    { id: 15, tutorials_id: 6, url: "https://www.youtube.com/embed/WVCeZqufg0k" },
    { id: 16, tutorials_id: 7, url: "https://www.youtube.com/embed/gbnoFH9Xync" },
    { id: 17, tutorials_id: 12, url: "https://www.youtube.com/embed/B0DrWAUsNSc" },
    { id: 18, tutorials_id: 11, url: "https://www.youtube.com/embed/22jX7ifvRhQ" },
    { id: 19, tutorials_id: 11, url: "https://www.youtube.com/embed/JgFuowYv94I" },
    { id: 20, tutorials_id: 12, url: "https://www.youtube.com/embed/7fISLgmX8WU" },
    { id: 21, tutorials_id: 13, url: "https://www.youtube.com/embed/UC26M5WmJBY" },
    { id: 22, tutorials_id: 14, url: "https://www.youtube.com/embed/QsfBU4fQPzo&list=PL-lxoPS_1OXV5ACzAiQMen8xYrfAuMuRk" },
    { id: 23, tutorials_id: 15, url: "https://www.youtube.com/embed/sgTLPWUNpgc&list=PL4cE7c8A5wwby83OD5LvCqvLNNqtguzs74" },
    { id: 24, tutorials_id: 16, url: "https://www.youtube.com/embed/lo2PtgqI8Sc" },
    { id: 25, tutorials_id: 17, url: "https://www.youtube.com/embed/yqwb4HIrORM" },
    { id: 26, tutorials_id: 18, url: "https://www.youtube.com/embed/13XITK8PyQU" },
    { id: 27, tutorials_id: 19, url: "https://www.youtube.com/embed/74p9wEDGfOY" },
    { id: 28, tutorials_id: 20, url: "https://www.youtube.com/embed/GbCO46F6b0I" },
    { id: 29, tutorials_id: 21, url: "https://www.youtube.com/embed/cOlyBJuOdhI" },
    { id: 30, tutorials_id: 22, url: "https://www.youtube.com/embed/RGaeto-z-bA" },
    { id: 31, tutorials_id: 23, url: "https://www.youtube.com/embed/M-rjtG_CHzU" },
    { id: 32, tutorials_id: 24, url: "https://www.youtube.com/embed/E-yvUJBydrY" },
    { id: 33, tutorials_id: 25, url: "https://www.youtube.com/embed/_N5hRHnLPdE" },
    { id: 34, tutorials_id: 26, url: "https://www.youtube.com/embed/MJfWGNhGBj0" },
    { id: 35, tutorials_id: 27, url: "https://www.youtube.com/embed/B3062sfFZuM" },
    { id: 36, tutorials_id: 28, url: "https://www.youtube.com/embed/dPDlWvxFw5Y" },
    { id: 37, tutorials_id: 29, url: "https://www.youtube.com/embed/dS14aGxN0Ck" },
    { id: 38, tutorials_id: 30, url: "https://www.youtube.com/embed/FitTY4hXN0M" },
    { id: 39, tutorials_id: 31, url: "https://www.youtube.com/embed/Qc0tIjw7fII" },



  ])
  .then(() => {
    return knex.raw(`SELECT setval('contents_id_seq', (SELECT MAX(id) FROM contents))`)
  })
}
