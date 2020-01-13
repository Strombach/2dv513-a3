'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/homeController')

router.post('/', (req, res, next) => {
	if (req.session.loggedIn) {
		req.session.destroy()
		res.redirect('/')
	} else if (!req.session.loggedIn) {
		res.redirect('/')
	} else {
		next()
	}
})

module.exports = router