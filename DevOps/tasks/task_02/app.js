'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api_products = require('./routes/routes_products')
const api_clients = require('./routes/routes_clients')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', api_products)
app.use('/api', api_clients)

module.exports = app
