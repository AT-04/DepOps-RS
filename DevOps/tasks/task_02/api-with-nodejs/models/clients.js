'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema =Schema({
	ci_nit: Number,
	name: String,
	lastname: String,
	email: String,
})

module.exports = mongoose.model('Client', ClientSchema)
