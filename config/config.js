import mongoose from 'mongoose'
let connection = mongoose.connect('mongodb://localhost/local')
.then(() => console.log("mongoose connected!!"))
.catch(err => console.log("mongoose connection error"))

module.exports = connection