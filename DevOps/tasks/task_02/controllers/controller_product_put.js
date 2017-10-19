'use strict'

const Product =require('../models/products')

function updateProduct(request, response) {

	let productId = request.params.productId
	let body_update = request.body
	Product.findByIdAndUpdate(productId, body_update, (err, productUpdate) =>{
		if(err) { 
			return response.status(500).send({message: `error to performs update to mongoDB: ${err}`}) 
		}
		response.status(200).send({product: request.body})
	})
}

module.exports = {
	updateProduct
}
