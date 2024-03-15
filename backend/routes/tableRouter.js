const express = require('express');
const usersRouter = express.Router();
const { userController } = require('./controller');

usersRouter.get('/profile/:username', (req, res, next) => 
    userController.get.byUsername(req, res, next)
);

module.exports = usersRouter;