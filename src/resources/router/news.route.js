const express = require('express');
const route = express.Router();

const newsController = require('../controller/news.controller');

route.get('/', newsController.index);

module.exports = route