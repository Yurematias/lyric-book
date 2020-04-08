const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/UsersController');
const MusicsController = require('./controllers/MusicsController');

routes.get('/users', UsersController.list);
routes.post('/users', UsersController.create);

routes.get('/musics', MusicsController.list);
routes.post('/musics', MusicsController.create);

module.exports = routes;