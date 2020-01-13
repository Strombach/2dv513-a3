'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/loginController')

router.get('/', controller.checkLoginStatus, controller.index)

router.post('/auth', controller.postLogin)

module.exports = router
