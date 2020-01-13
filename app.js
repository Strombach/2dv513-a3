'use strict'

const express = require('express')
const db = require('./database/db')
const path = require('path')
const logger = require('morgan')


const app = express()
const expressPort = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

//Routes
app.use('/auth', require('./routes/loginRouter'))

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))