'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const loginController = {}

loginController.index = (req, res, next) => res.render('login/index')

loginController.postLogin = async (req, res, next) => {

	db.query('SELECT * FROM users WHERE username = ?', req.body.username, (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			if (checkPassword(rows[0], req.body.password)) {
				req.session.loggedIn = rows[0].userID
				fetchMyMovies(rows[0].userID)
				res.render('home/index')
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
		res.render('home/index')
	} else {
		next()
	}
}

function checkPassword(sqlData, enteredPw) {
	if (sqlData.password === enteredPw) {
		console.log('User is logged in')
		return true
	}
	return false
}

function fetchMyMovies(userId) {
	db.query("SELECT * FROM scores WHERE uID = ?", userId, (err, rows, fields) => {
		if (err) throw err

		if (rows.length > 0) {
			console.log(rows)
		}
	})
}

module.exports = loginController
