const siteRouter = require('../router/site.router');

function route(app) {
    app.use('/', siteRouter);
}

module.exports = route;