const {Product} = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findById({_id : req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.editProduct = (req, res) => {
    Product.updateProduct({_id : req.params.id}, req.body, {new : true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOneProduct({_id : req.params.id})
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => res.json(err))
}