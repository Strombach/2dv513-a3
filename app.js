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

//Routes
app.use('/', require('./routes/loginRouter'))

connection.query('SELECT * FROM movies', (err, rows, fields) => {
	if (err) throw err

	console.log(rows)
})

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))