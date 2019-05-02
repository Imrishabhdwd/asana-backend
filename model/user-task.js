import mongoose from 'mongoose'
let Schema = mongoose.Schema

let userSchema = Schema({
    id: Schema.Types.ObjectId,
    title: {
        type: String,  
        required: [true, "task title is required"]
    },
    subtitle: {
        type: String,  
        required: [true, "task subtitle is required"]
    },
    message: { 
        type: [String]
    },
    assignedTo: {
        type: String,
        required: [true, "assignedTo is required"]
    },
    createdBy: {
        type: String,
        required: [true, "createdBy is required"]
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    },
    dueDate: {
        type: Date,
        required: [true, "Due Date is required"]
    },
    description: {
        type: String,
        required: [true, "Task Discription is required"]
    }
})

let userTasks = mongoose.model('usertasks', userSchema)

module.exports = userTasks
