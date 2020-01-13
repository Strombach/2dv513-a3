'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.index = (req, res, next) => res.render('login/index')

loginController.postLogin = async (req, res, next) => {

	db.query('SELECT * FROM users WHERE username = ?', req.body.username, async (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			if (checkPassword(rows[0], req.body.password)) {
				req.session.loggedIn = rows[0].userID
				res.redirect('/home')
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
		res.redirect('/home')
	} else {
		next()
	}
}

function checkPassword(sqlData, enteredPw) {
	if (sqlData.password === enteredPw) {
		return true
	}
	return false
}

module.exports = loginController
