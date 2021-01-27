const Jokes = require('../models/jokes.model')



module.exports.findAllJokes = (req, res) => {
    console.log("looking for the jokes")

    Jokes.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ errors: err }))
}

module.exports.makeNewJokes = (req, res) => {
    console.log("making new jokes")
    Jokes.create(req.body)
        .then(newJoke => res.json({ results: newJoke }))
        .catch(err => res.json({ errors: err }))
}

module.exports.findOneJoke = (req, res) => {
    console.log("joke id search", req.params.id)
    Jokes.findOne({ _id: req.params.id })
        .then(selectedJoke => res.json({ results: selectedJoke }))
        .catch(err => res.json({ errors: err }))
}

module.exports.updateJoke = (req,res) => {
    console.log("going to update the joke", req.params.id)
    Jokes.findByIdAndUpdate({_id: req.params.id}, req.body,
        {
            new: true,
            useFindAndModify:false
        })
        .then(updatedJoke => res.json({results: updatedJoke}))
        .catch(err => res.json({errors: err}))
}

module.exports.deleteJoke = (req, res) => {


    Jokes.findByIdAndDelete({ _id: req.params.id })
        .then(deletedJoke => res.json({ results: deletedJoke }))
        .catch(err => res.json({ errors: err }))
}

