'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/movieController')

router.get('/', controller.checkLoginStatus, controller.index)

router.get('/all', controller.checkLoginStatus, controller.listAll)

router.post('/', controller.checkLoginStatus, controller.gradeMovie)


module.exports = router
