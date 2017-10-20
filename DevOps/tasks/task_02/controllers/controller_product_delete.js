'use strict'

const Product =require('../models/products')

function deleteProduct(request, response) {
	let productId = request.params.productId
	Product.findByIdAndRemove(productId, (err, productStored) => {
			if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
			}
		   response.status(200).send({message: 'the product was delete'})
	})
}

module.exports = {
	deleteProduct
}
