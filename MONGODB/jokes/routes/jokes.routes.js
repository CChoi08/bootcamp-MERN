const JokesController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes)
    app.post("/api/jokes/new", JokesController.createJoke)
    app.put("/api/jokes/update/:id", JokesController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke)
}