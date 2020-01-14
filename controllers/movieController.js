'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const movieController = {}

movieController.index = (req, res, next) => {
	let movie = req.query.id

	let query = 'SELECT * FROM movies WHERE movieID = ?'

	db.query(query, movie, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows }
		res.render('movie/index', { locals })
	})
}

movieController.checkLoginStatus = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = movieController