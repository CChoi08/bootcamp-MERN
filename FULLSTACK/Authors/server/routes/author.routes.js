const AuthorController = require("../controllers/author.controller")

module.exports = function(app) {
    app.get("/api/allAuthors", AuthorController.findAll)
    app.put("/api/editAuthor/:id", AuthorController.editAuthor)
    app.post("/api/createAuthor", AuthorController.createAuthor)
    app.get("/api/author/:id", AuthorController.oneAuthor)
    app.delete("/api/author/delete/:id", AuthorController.deleteAuthor)
}