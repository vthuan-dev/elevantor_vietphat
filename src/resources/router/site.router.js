const express = require('express');
const route = express.Router();
const siteController = require('../controller/site.controller');

route.get('/', siteController.index);

module.exports = route;