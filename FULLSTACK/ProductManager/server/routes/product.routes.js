const ProductController = require("../controllers/product.controller")

module.exports = function(app) {
    app.get("/api/oneProduct/:id", ProductController.oneProduct)
    app.post("/api/product/create", ProductController.createProduct)
    app.get("/api/allProducts", ProductController.allProducts)
    app.put("/api/product/edit/:id", ProductController.editProduct)
    app.delete("/api/product/delete/:id", ProductController.deleteProduct)
}