'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const movieController = {}

movieController.index = (req, res, next) => {
	let movie = req.query.id

	let query = 'SELECT * FROM movies WHERE movieID = ?'

	db.query(query, movie, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows[0] }

		let newQuery = 'SELECT average FROM average_score WHERE movieID = ?'

		db.query(newQuery, movie, async (err, rows, fields) => {
			if (err) throw err
			locals.average = rows[0].average
			res.render('movie/index', { locals })
		})
	})
}

movieController.listAll = (req, res, next) => {
	let query = 'SELECT * FROM average_score'

	db.query(query, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows }
		res.render('movie/list', { locals })
	})
}

movieController.gradeMovie = (req, res, next) => {
	let values = [parseInt(req.body.movieID), parseInt(req.session.loggedIn), parseInt(req.body.score)]
	let insertQuery = `INSERT INTO imduh.scores (mID, uID, score) VALUES (?) ON DUPLICATE KEY UPDATE score =${values[2]}`

	db.query(insertQuery, [values], (err, rows, fields) => {
		if (err) throw err
		res.redirect('/home')
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