'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.getLogin = async (req, res, next) => {
	res.send('Hello World From LoginController!')

	db.query('SELECT * FROM users', (err, rows, fields) => {
		if (err) throw err

		console.log(rows)
	})
}

module.exports = loginController
