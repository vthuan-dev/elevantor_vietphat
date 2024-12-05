const express = require('express');
const route = express.Router();

const contactController = require('../controller/contact.controller');

route.get('/', contactController.index);

module.exports = route;