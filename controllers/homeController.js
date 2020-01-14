'use strict'

const mysql = require('mysql')
const db = require('../database/db')

const homeController = {}

homeController.index = (req, res, next) => {
	let user = req.session.loggedIn

	let query = `SELECT imduh.scores.mID, imduh.scores.score, imduh.movies.name
	FROM imduh.movies
	JOIN imduh.scores
	ON imduh.movies.movieID = imduh.scores.mID
	AND imduh.scores.uID=?`

	db.query(query, user, async (err, rows, fields) => {
		if (err) throw err
		let locals = { data: rows }
		res.render('home/index', { locals })
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