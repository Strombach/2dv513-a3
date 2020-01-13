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

homeController.checkLoginStatus = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
}

module.exports = homeController