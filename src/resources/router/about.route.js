const express = require('express');
const route = express.Router();

const aboutController = require('../controller/about.controller');

route.get('/', aboutController.index);

module.exports = route;