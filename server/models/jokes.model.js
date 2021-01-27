const mongoose = require("mongoose")

const JokesSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [10, "Joke must be at least 10 charaters long"]

    },

    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters"]

    }

})

const Jokes = mongoose.model("Jokes", JokesSchema)

module.exports = Jokes;