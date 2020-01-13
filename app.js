'use strict'

const express = require('express')
const session = require('express-session')
const db = require('./database/db')
const path = require('path')
const logger = require('morgan')


const app = express()
const expressPort = 3000

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

// Setting up the session middleware
app.use(session({
	name: 'imduh',
	secret: 'Thisisanotsosecretsecret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		maxAge: 60 * 60 * 1000,
		sameSite: 'strict'
	}
}))

//Routes
app.use('/auth', require('./routes/loginRouter'))

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))