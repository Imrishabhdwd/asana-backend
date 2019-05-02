import mongoose, { SchemaType } from 'mongoose'

let Schema = mongoose.Schema

let adminSchema = Schema({
    id: Schema.Types.ObjectId,
    adminname: {
        type: String, required: [true, "Admin Name is required"],
        unique: true
    },
    password: {type: String, required: [true, "Password is required"]},
    email: {type: String, required: [true, "Email is required"],
    validate: {
        validator: (value) => {
            return /[a-z0-9!@#$%^&.*()]{3,}@[a-z]{3,}\.com$/.test(value)
        },
        message: "Please provide a valid email address"
    }
    }
})

let adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel