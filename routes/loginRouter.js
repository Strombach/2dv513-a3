'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/loginController')

router.get('/home', controller.checkLoginStatus, controller.home)

router.post('/', controller.postLogin)

module.exports = router
