const mysql = require('mysql')

let connection = mysql.createConnection({
  host: process.env.DB_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_DB
})

connection.connect()

console.log('Database Connected')

module.exports = connection
