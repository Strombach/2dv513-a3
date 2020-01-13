'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.home = (req, res, next) => res.send('/home')

loginController.postLogin = async (req, res, next) => {

	db.query('SELECT * FROM users WHERE username = ?', req.body.username, (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			if (checkPassword(rows[0], req.body.password)) {
				req.session.loggedIn = rows[0].userID
				res.send('You are logged in<3')
			} else {
				res.send('Wrong Password')
			}
		} else {
			res.send('No user found')
		}
	})
}


loginController.checkLoginStatus = (req, res, next) => {
	if (req.session.loggedIn) {
		res.send('Welcome Back')
	} else {
		res.redirect('/')
		res.status(403)
	}
}


function checkPassword(sqlData, enteredPw) {
	if (sqlData.password === enteredPw) {
		console.log('User is logged in')
		return true
	}
	return false
}

module.exports = loginController
