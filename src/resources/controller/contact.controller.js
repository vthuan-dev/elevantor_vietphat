class ContactController{
    index(req, res, next) {
        res.render('contact');
    }
}

module.exports = new ContactController();