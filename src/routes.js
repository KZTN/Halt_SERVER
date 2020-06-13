const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const LocationController = require('./controllers/LocationController');
const SessionController = require('./controllers/SessionController');


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

module.exports = routes;
