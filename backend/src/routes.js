const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/Users');
const MusicsController = require('./controllers/Musics');
const UserMusicsController = require('./controllers/UserMusics');

routes.get('/users', UsersController.list);
routes.post('/users', UsersController.create);

routes.get('/musics', MusicsController.list);
routes.post('/musics', MusicsController.create);

routes.get('/user_musics', UserMusicsController.list);
routes.post('/user_musics', UserMusicsController.create);

module.exports = routes;