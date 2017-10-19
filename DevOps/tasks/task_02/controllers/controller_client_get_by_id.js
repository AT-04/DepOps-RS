'use strict'

const Client =require('../models/clients')

function getClientById(request, response) {
	let clientId = request.params.clientId
	Client.findById(clientId, (err, clientStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		if(!clientStored) {
			return response.status(404).send({message: 'product does not exist'})
		}
		response.status(200).send({clientStored})
	})
}

module.exports = {
	getClientById
}
