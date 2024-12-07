class NewsController{
    index(req, res, next){
        res.render('news/news');
    }

    detail(req, res, next){
        res.render('news/detail');
    }
}

module.exports = new NewsController();