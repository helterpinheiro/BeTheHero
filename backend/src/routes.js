const express = require('express');
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//rota de login
routes.post('/session', SessionController.create)

//rotas ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//rota profile
routes.get('/profile', ProfileController.index)

//rotas de casos
routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes

