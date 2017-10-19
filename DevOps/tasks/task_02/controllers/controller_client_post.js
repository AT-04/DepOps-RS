'use strict'

const Client =require('../models/clients')

function saveClient(request, response) {
	console.log('POST  /api/clients')
	console.log(request.body)
	let client = new Client()
	product.ci_nit = request.body.ci_nit
	product.name = request.body.name
	product.lastname= request.body.lastname
	product.email= request.body.email
	client.save((err,clientStored) => {
		if(err) { 
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`}) 
		}
	response.status(201).send({client: clientStored})
	})
}

module.exports = {
	saveClient
}
