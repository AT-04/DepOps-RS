'use strict'

const Client =require('../models/clients')

function deleteClient(request, response) {
	let clientId = request.params.clientId
	Client.findByIdAndRemove(clientId, (err, productStored) => {
			if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
			}
		  response.status(200).send({message: 'the client was delete'})
	})
}

module.exports = {
	deleteClient
}
