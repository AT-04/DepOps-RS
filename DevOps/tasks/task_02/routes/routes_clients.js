'use strict'

const express = require('express')
const api = express.Router()

const CtrlClientsGet =  require('../controllers/controller_client_get')
const CtrlClientsGetById = require('../controllers/controller_client_get_by_id')
const CtrlClientsPost = require('../controllers/controller_client_post')
const CtrlClientsPut = require('../controllers/controller_client_put.js')
const CtrlClientsDelete = require('../controllers/controller_client_delete')

api.get('/clients',CtrlClientsGet.getClients)
api.get('/clients/:clientId',CtrlClientsGetById.getClientById)
api.post('/clients', CtrlClientsPost.saveClient)
api.put('/clients/:clientId', CtrlClientsPut.updateClient)
api.delete('/clients/:clientId', CtrlClientsDelete.deleteClient)

module.exports = api
