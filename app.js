'use strict'

const express = require('express')
const mysql = require('mysql')

const app = express()
const expressPort = 3000

let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "imduh"
})

connection.connect()

connection.query('SELECT * FROM movies', (err, rows, fields) => {
	if (err) throw err

	console.log(rows)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))