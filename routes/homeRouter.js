'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/homeController')

router.get('/', controller.index)

// router.post('/auth', controller.postLogin)

module.exports = router
