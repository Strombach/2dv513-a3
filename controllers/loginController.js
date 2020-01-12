'use strict'

const User = require('mysql')

const loginController = {}

loginController.getLogin = async (req, res, next) => {
	res.send('Hello World From LoginController!')
}

module.exports = loginController
