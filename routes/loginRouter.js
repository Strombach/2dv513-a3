'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/loginController')

router.post('/', controller.getLogin)

module.exports = router
