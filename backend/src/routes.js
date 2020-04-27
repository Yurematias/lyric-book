const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/Users');
const MusicsController = require('./controllers/Musics');
const UserMusicsController = require('./controllers/UserMusics');
const ProfileController = require('./controllers/Profile');
const SessionController = require('./controllers/Session');

routes.get('/users', UsersController.list);
routes.post('/users', UsersController.create);

routes.get('/musics', MusicsController.list);
routes.post('/musics', MusicsController.create);

routes.get('/user_musics', UserMusicsController.list);
routes.post('/user_musics', UserMusicsController.create);
routes.delete('/user_musics:music_id', UserMusicsController.delete);

routes.get('/profile_musics', ProfileController.list);

routes.post('/sessions', SessionController.create);


module.exports = routes;