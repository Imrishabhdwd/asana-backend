import mongoose from 'mongoose'
let Schema = mongoose.Schema

let userSchema = Schema({
    id: Schema.Types.ObjectId,
    username: {
        type: String, 
        unique: true, 
        required: [true, "Username is required"]
    },
    password: {
        type: String, 
        required: [true, "Password is required"]
    },
    email: { 
        type: String, 
        unique: true, 
        required: [true, "Email is required"],
        validate : {
            validator: (value) => {
                return /[a-z0-9!@#$%^&.*()]{3,}@[a-z]{3,}\.com$/.test(value)
            },
            message: "Please provide a valid email address"
        }
    }
})

let userModel = mongoose.model('users', userSchema)

module.exports = userModel
