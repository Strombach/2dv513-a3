'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const movieController = {}

movieController.index = (req, res, next) => {
	res.render('movie/index')
	// let user = req.session.loggedIn

	let query = ''

	// db.query(query, user, async (err, rows, fields) => {
	// 	if (err) throw err
	// 	let locals = { data: rows }
	// 	res.render('home/index', { locals })
	// })
}

movieController.checkLoginStatus = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = movieController