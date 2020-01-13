'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/homeController')

router.get('/', controller.checkLoginStatus, controller.index)

module.exports = router
