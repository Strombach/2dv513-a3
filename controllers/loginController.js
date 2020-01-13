'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.getLogin = async (req, res, next) => {
	res.send('Hello World From LoginController!')

	db.query('SELECT * FROM users WHERE username = ?', req.body.username, (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			console.log(rows)
		} else {
			console.log('No user found')
		}
	})
}

module.exports = loginController
