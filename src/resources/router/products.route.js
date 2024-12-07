const express = require('express');
const route = express.Router();
const productsController = require('../controller/products.controller');

route.get('/:slug', productsController.detail);
route.get('/', productsController.index);

module.exports = route;