const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ishaanrathod:3IRTONJaMTMKKXYY@cluster0.maswa8u.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema)

module.exports = {
    todo
}