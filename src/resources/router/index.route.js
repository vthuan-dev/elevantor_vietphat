const siteRouter = require('./site.route');
const productsRouter = require('../router/products.route');
const newsRouter = require('../router/news.route');
const aboutRouter = require('../router/about.route');

function route(app) {
    app.use('/products', productsRouter);
    app.use('/news', newsRouter);
    app.use('/about-us', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;