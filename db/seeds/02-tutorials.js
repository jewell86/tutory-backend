console.log('Seeding Tutorials')

exports.seed = function (knex, Promise) {
  return knex('tutorials').insert([
    { id: 1, users_id: 11, title: 'Cooking 101', description: 'Intro to cooking', img: "https://static01.nyt.com/images/2017/09/27/dining/27INSTAPOT1/27INSTAPOT1-superJumbo.jpg" },
    { id: 2, users_id: 9, title: 'Breathing 101', description: 'Intro to breathing', img: "http://anxietybegone.com/wp-content/uploads/2017/12/Breathing-Technique-1.jpg" },
    { id: 3, users_id: 1, title: 'Swimming 101', description: 'Learn to swim!', img: "https://static1.squarespace.com/static/53585322e4b07ec2da3920b8/t/5976ad234c0dbf59e8f415cc/1500949798441/Swim+Lessons+Children+2_920x550.jpg?format=1500w" },
    { id: 4, users_id: 8, title: 'Reading 101', description: 'Intro to reading', description: "For if you are new", img: "https://assets4.irisreading.com/wp-content/uploads/2014/07/mastery-420x420.png" },
    { id: 5, users_id: 4, title: 'Smiling 101', description: "Watch if you are empty inside", img: "https://qph.fs.quoracdn.net/main-qimg-1afa699bc34810872dadec134dba0580" },
    { id: 6, users_id: 4, title: 'Smiling 201', description: "Watch after you've managed fake smiling", img: "https://i.pinimg.com/originals/90/51/c2/9051c2977323b8895cac19258dddcc02.jpg" },
    { id: 7, users_id: 11, title: 'Cooking 102', description: 'Now that you can feed yourself, lets work on making it edible!', img: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_539,q_60,w_718/g_north_east,l_cozymeal-verified,w_120,x_0,y_40/exow1qnb8poayurhcp2f" },
    { id: 9, users_id: 1, title: 'Makeup 101', description: 'How to paint your face on', img: "https://media.glamour.com/photos/588b5851dd66e3a833445758/1:1/w_352/Screen%20Shot%202017-01-27%20at%209.12.04%20AM.png" },
    { id: 10, users_id: 1, title: 'Makeup 102', description: 'Lets tone it down now', img: "https://cdn.cliqueinc.com/posts/222356/-222356-1493063131294-main.600x0c.jpg" },
    { id: 11, users_id: 9, title: 'Survival 101', description: 'Theres no 102 because you should still be outside there surviving', img: "https://i.ytimg.com/vi/iF_5Oag5nko/maxresdefault.jpg" },
    { id: 12, users_id: 8, title: 'Gardening 101', description: 'Girl we gon beautify that yard!', img: "https://www.hotel-regents-paris.com/wp-content/uploads/2017/05/regent_garden_jardin_floral_japonais_paris_boutique_hotel.jpg" },
    { id: 13, users_id: 8, title: 'Gardening 102', description: 'Now lets make it pop!', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O5V_KksM2LzC5RcVKO9wmOOiIHRFyDRGJF-koy9eLUEmO78DzQ" },
    { id: 14, users_id: 14, title: 'Javascript 101', description: 'Lets get nerdy', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_crDirRsQQqpWANGkg_qcwHVDEL783CA4uNFvTjmlkaYdQWY_A" },
    { id: 15, users_id: 14, title: 'PUBG 101', description: 'Learn to blow stuff up!', img: "https://i.ytimg.com/vi/Btj5WyXES7k/maxresdefault.jpg" },
    { id: 16, users_id: 6, title: 'Sailing 101', description: 'Learn boatz!', img: "https://www.damajority.com/wp-content/uploads/2015/07/o-sailing-facebook.jpg" },
    { id: 17, users_id: 6, title: 'Sailing 102', description: 'If you didnt sink after taking Sailing 101', img: "https://www.charterworld.com/images/yachts/NOHEEA%20-%20Sailing%20to%20windward%20-%20View%20from%20Stern.jpg" },
    { id: 18, users_id: 3, title: 'Vinyl 101', description: 'If youre new to collecting vinyl', img: "https://img.discogs.com/V15YfsyAQ2Fsky_sL5QkxJxJjzM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-569611-1445403057-3989.jpeg.jpg" },
    { id: 19, users_id: 3, title: 'Vinyl 102', description: 'If you tend to store them on their side, please watch', img: "https://cdn.shopify.com/s/files/1/1792/0755/products/R-1424847-1496024133-8591_jpeg_1800x.jpg?v=1512178273" },
    { id: 20, users_id: 2, title: 'Ping Pong 101', description: 'Learn to hit a tiny ball with cat-like reflexes', img: "http://travhancock.com/wp-content/uploads/2014/08/ping-pong-1.jpg" },
    { id: 21, users_id: 2, title: 'Ping Pong 102', description: 'Serious ping pong playing developers need look no further', img: "http://gametablesguide.com/wp-content/uploads/2016/12/obama-playing-ping-pong.jpg" },
    { id: 22, users_id: 5, title: 'Whisky 101', description: 'If the whisky youve been drinking isnt good, do watch', img: "http://swansonquotes.com/wp-content/uploads/s04-ep22-somechanges2-1000x500.jpg" },
    { id: 23, users_id: 5, title: 'Whisky 102', description: 'Once its tasting good, watch this', img: "http://swansonquotes.com/wp-content/uploads/s02-ep10-scotch2-1000x500.jpg" },
    { id: 24, users_id: 10, title: 'Fashion 101', description: 'Dont wear that, watch this', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt_lO26CMTzROBizjPE3Cac_GycmlAQQS7FemWzdQOzWY6deI" },
    { id: 25, users_id: 10, title: 'Fashion 102', description: 'Once you can dress yourself, watch this', img: "https://i.pinimg.com/736x/11/99/c9/1199c9332879bad1b1016ddabbbf29f5--greg-kadel-sparkle.jpg" },
    { id: 26, users_id: 7, title: 'Entertaining 101', description: 'Making everyone happy', img: "https://steempress.files.wordpress.com/2018/01/ptzclhhjab3h54wtilrh.png?w=474" },
    { id: 27, users_id: 7, title: 'Entertaining 102', description: 'Cooking for the masses', img: "http://couponsavingsinthesouth.com/wp-content/uploads/2016/02/FB_IMG_1454707869458.jpg" },
    { id: 28, users_id: 13, title: 'Board Games 102', description: 'When Chutes and Ladders gets boring', img: "https://usercontent1.hubstatic.com/12613942_f520.jpg" },
    { id: 29, users_id: 13, title: 'Board Games 101', description: 'If you are new to having fun', img: "https://img-aws.ehowcdn.com/877x500p/i.ehow.com/images/a04/sn/nf/make-snakes-ladders-board-800x800.jpg" },
    { id: 30, users_id: 12, title: 'Anime 102', description: 'Now youre hooked', img: "https://jojud265nia2bj9sy4ah9b61-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Princess-Monoke-1600x900-c-default.jpg" },
    { id: 31, users_id: 12, title: 'Anime 101', description: 'If youve somehow never seen Pokemon', img: "https://yt3.ggpht.com/OszFT2br9W4q4IM85lnIiCi2bjAAk-AH4hy0JNxEAFdez1gKy4Mdhr_FeVz_QJ4XOatYjlkoImDlqMzubBE=s900-mo-c-c0xffffffff-rj-k-no" },

  ])
    .then(() => {
      return knex.raw(`SELECT setval('tutorials_id_seq', (SELECT MAX(id) FROM tutorials))`)
    })
}
