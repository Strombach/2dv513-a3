'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const homeController = {}

homeController.index = (req, res, next) => {
	let user = req.session.loggedIn

	db.query('SELECT * FROM scores WHERE uID = ?', user, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows }
		console.log(locals.data)
		res.render('home/index', { locals })
	})
}
// loginController.postLogin = async (req, res, next) => {

// 	db.query('SELECT * FROM users WHERE username = ?', req.body.username, async (err, rows, fields) => {
// 		if (err) throw err

// 		if (rows.length > 0) {
// 			if (checkPassword(rows[0], req.body.password)) {
// 				req.session.loggedIn = rows[0].userID
// 				fetchMyMovies(rows[0].userID)
// 				res.redirect('/home')
// 			} else {
// 				res.send('Wrong Password')
// 			}
// 		} else {
// 			res.send('No user found')
// 		}
// 	})
// }

homeController.checkLoginStatus = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = homeController