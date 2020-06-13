const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const LocationController = require('./controllers/LocationController');
const SessionController = require('./controllers/SessionController');
const FavoriteController = require('./controllers/FavoriteController');
const CommentController = require('./controllers/CommentController');


routes.get('/', (req, res) => {
    return res.json({msg: "ok!"});
});


routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.store);


routes.get('/locations', LocationController.index);
routes.get('/locations/:_id', LocationController.show);
routes.post('/locations', LocationController.store);
routes.post('/sessions', SessionController.store);

routes.post('/favorite', FavoriteController.store);
routes.put('/favorite', FavoriteController.remove);

routes.post('/comment', CommentController.store);

module.exports = routes;
