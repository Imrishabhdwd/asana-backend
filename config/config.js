import mongoose from 'mongoose'
let connection = mongoose.connect('mongodb://myApp:App1234@ds229771.mlab.com:29771/testmj_app')
.then(() => console.log("mongoose connected!!"))
.catch(err => console.log("mongoose connection error"))

module.exports = connection