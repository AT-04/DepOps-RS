'use strict'

const Product =require('../models/products')

function saveProduct(request, response) {
	console.log('POST  /api/products')
	console.log(request.body)
	let product = new Product()
	product.name = request.body.name
	product.pircture = request.body.pircture
	product.price= request.body.price
	product.category= request.body.category
	product.description= request.body.description
	product.save((err,productStored) => {
		if(err) { 
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`}) 
		}
	response.status(201).send({product: productStored})
	})
}

module.exports = {
	saveProduct
}
