'use strict'

const express = require('express')

const app = express()
const expressPort = 3000

//Routes
app.use('/', require('./routes/loginRouter'))

app.listen(expressPort, () => console.log(`Server running on port: ${expressPort}`))