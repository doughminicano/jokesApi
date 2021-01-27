const JokesController = require("../controllers/jokes.controller")




module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes/create", JokesController.makeNewJokes);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.delete("/api/jokes/destroy/:id", JokesController.deleteJoke);
}



