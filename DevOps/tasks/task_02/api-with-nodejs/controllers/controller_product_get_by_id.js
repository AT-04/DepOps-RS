'use strict'

const Product =require('../models/products')

function getProductById(request, response) {
	let productId = request.params.productId
	Product.findById(productId, (err, productStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		if(!productStored) {
			return response.status(404).send({message: 'product does not exist'})
		}
		response.status(200).send({productStored})
	})
}

module.exports = {
	getProductById
}
