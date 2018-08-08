const path = require('path')
require('dotenv').load()

const config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds')
  }
}

module.exports = {
  test: config,
  production: config,
  development: config
}

// module.exports = {
//   test: { client: 'pg', connection: process.env.DATABASE_URL },
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: path.join(__dirname, 'db', 'migrations')
//     },
//     seeds: {
//       directory: path.join(__dirname, 'db', 'seeds')
//     }
//   }
// }
