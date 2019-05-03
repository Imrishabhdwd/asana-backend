import mongoose from 'mongoose'
var dbUri= 'mongodb://myApp:App1234@ds229771.mlab.com:29771/testmj_app'
let connection = mongoose.connect(dbUri,{useNewUrlParser: true })
.then(() => console.log("mongoose connected!!"))
.catch(err => console.log("mongoose connection error",err))

module.exports = connection