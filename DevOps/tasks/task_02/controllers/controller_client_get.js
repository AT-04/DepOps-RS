'use strict'

const Client =require('../models/clients')

function getClients(request, response) {
	Client.find({},(err, clientStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		if(!clientStored) {
			return response.status(404).send({message: 'clients does not exist'})
		}
		response.status(200).send({clientStored})
	})
}

module.exports = {
	getClients
}
