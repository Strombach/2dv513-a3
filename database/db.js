const mysql = require('mysql')

let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "imduh"
})

connection.connect()

console.log('Database Connected')

module.exports = connection
