const path = require('path')
require('dotenv').load()

module.exports = {
  test: { client: 'pg', connection: process.env.DATABASE_URL },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
