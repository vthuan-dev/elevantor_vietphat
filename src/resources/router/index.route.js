const siteRouter = require('./site.route');
const productsRouter = require('../router/products.route');
const newsRouter = require('../router/news.route');
const aboutRouter = require('../router/about.route');
const contactRouter = require('../router/contact.route');

function route(app) {
    app.use('/products', productsRouter);
    app.use('/news', newsRouter);
    app.use('/about-us', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/', siteRouter);
}

module.exports = route;