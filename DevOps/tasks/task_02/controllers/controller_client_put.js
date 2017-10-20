'use strict'

const Client =require('../models/clients')

function updateClient(request, response) {

	let clientId = request.params.clientId
	let body_update = request.body
	Client.findByIdAndUpdate(clientId, body_update, (err, clientUpdate) => {
		if(err) { 
			return response.status(500).send({message: `error to performs update to mongoDB: ${err}`}) 
		}
		response.status(200).send({client: body_update})
	})
}

module.exports = {
	updateClient
}
