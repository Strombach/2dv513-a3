'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.postLogin = async (req, res, next) => {

	db.query('SELECT * FROM users WHERE username = ?', req.body.username, (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			console.log(rows[0].password)
			if (checkPassword(rows[0], req.body.password)) {
				res.send('You are logged in<3')
			} else {
				res.send('Wrong Password')
			}
		} else {
			console.log('No user found')
			res.send('No user found')
		}
	})
}


function checkPassword(sqlData, enteredPw) {
	if (sqlData.password === enteredPw) {
		console.log('User is logged in')
		return true
	}
	return false
}

module.exports = loginController
