'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/movieController')

router.get('/', controller.checkLoginStatus, controller.index)

module.exports = router
