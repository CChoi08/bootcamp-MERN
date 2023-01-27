const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [
            true,
            "Author is required"
        ],
        minLength : [
            3,
            "Author must be a minimum of 3 characters long"
        ]
    }
}, {timestamps : true})

module.exports.Author = mongoose.model("Author", AuthorSchema)