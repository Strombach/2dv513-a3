'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const homeController = {}

homeController.index = (req, res, next) => {
	let user = req.session.loggedIn

	let query = `SELECT scores.mID, scores.score, movies.name
	FROM movies
	JOIN scores
	ON movies.movieID = scores.mID
	AND scores.uID=?`

	db.query(query, user, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows }
		let newQuery = 'SELECT hours FROM watch_time WHERE userID=?'

		db.query(newQuery, user, async (err, rows, fields) => {
			if (err) throw err
			locals.time = rows[0].hours
			res.render('home/index', { locals })
		})
	})
}

homeController.checkLoginStatus = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = homeController