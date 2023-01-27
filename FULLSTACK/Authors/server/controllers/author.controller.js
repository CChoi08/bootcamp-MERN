const {Author} = require("../models/author.model")

module.exports.findAll = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.editAuthor = (req, res) => {
    Author.findOneAndUpdate({_id : req.params.id}, req.body, {runValidators : true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id : req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}

module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}


