'use strict'

const express = require('express')
const api = express.Router()

const CtrlProductsGet = require('../controllers/controller_product_get')
const CtrlProductsGetById = require('../controllers/controller_product_get_by_id')
const CtrlProductsPost = require('../controllers/controller_product_post')
const CtrlProductsPut = require('../controllers/controller_product_put')
const CtrlProductsDelete = require('../controllers/controller_product_delete')

api.get('/products', CtrlProductsGet.getProducts)
api.get('/products/:productId', CtrlProductsGetById.getProductById)
api.post('/products', CtrlProductsPost.saveProduct)
api.put('/products/:productId', CtrlProductsPut.updateProduct)
api.delete('/products/:productId', CtrlProductsDelete.deleteProduct)

module.exports = api
