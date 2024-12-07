class ProductsController{
    index(req, res, next){
        res.render('products/products');
    }

    detail(req, res, next) {
        res.render('products/detail')
    }
}
module.exports = new ProductsController();