'use strict'

const Client =require('../models/clients')

function getClientById(request, response) {
	let clientId = request.params.clientId
	Product.findBbyID(productId, (err, clientStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		if(!product) {
			return response.status(404).send({message: 'product does not exist'})
		}
		rest.status(200).send({clientStored})
	})
}

module.exports = {
	getClientById
}
