'use strict'

require('dotenv').config({ path: 'db.env' })

const express = require('express')
const session = require('express-session')
const db = require('./database/db')
const path = require('path')
const logger = require('morgan')
const hbs = require('express-hbs')

const app = express()
const expressPort = 3000

app.engine('hbs', hbs.express4({
	defaultLayout: path.join(__dirname, 'views', 'layouts', 'default'),
	partialsDir: path.join(__dirname, 'views', 'partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

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
app.use('/', require('./routes/loginRouter'))

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))