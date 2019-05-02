import userModel from '../model/user-model'
import userTask from '../model/user-task'
import JWT from '../token'
const jwt = new JWT()
// user Detail start here
let addUser = (req, res, next) => {
    console.log(req.body)
    let UserDetail = userModel(req.body)
    UserDetail.save()
    .then(result => {
        console.log(`User Added Successfully!! \n ${result}`)
        let token = jwt.tokenByID(result)
        res.json({
            status: "success",
            message: "User Added Successfully",
            token,
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding User!! \n ${err}`)
        res.status(500).json({
            status: "error",
            message: "Error While Adding User!!",
            err
        })
    })
}

let getUser = (req, res, next) => {
    userModel.findOne(req.body)
    .select("-password")
    .then(async result => {
        if (!result)
        throw new Error("User Not Found")
        console.log(`User Found!! \n ${result}`)
        let token = await jwt.tokenByID(result)
        res.json({
            status: "success",
            message: "User Found!!",
            token,
            result
        })
    })
    .catch(err => {
        console.log(`Error, User Not Found!! \n ${err}`)
        res.status(200).json({
            error: "Account with this login not found",
            message: "Error, User Not Found!!",
            status: "error"
        })
    })
}

let getUsers = (req, res, next) => {
    userModel.find(req.body)
    .select("-password")
    .then(async result => {
        if (!result)
        throw new Error("User Not Found")
        console.log(`User Found!! \n ${result}`)
        res.json({
            status: "success",
            message: "User Found!!",
            result
        })
    })
    .catch(err => {
        console.log(`Error, User Not Found!! \n ${err}`)
        res.status(200).json({
            error: "Account with this login not found",
            message: "Error, User Not Found!!",
            status: "error"
        })
    })
}

let updateUser = (req, res, next) => {
    userModel.findOneAndUpdate({_id: req.body.userId}, req.body, { runValidators: true })
    .select("-password -username")
    .then(result => {
        console.log(`User Updated Successfully!! \n ${result}`)
        res.json({
            status: "success",
            message: "User Added Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Updating User \n ${err}`)
        res.json({
            status: "error",
            message: "Error While Updating User",
            err
        })
    })
}
let deleteUser = (req, res, next) => {
    userModel.findOneAndRemove({_id: req.body.userId})
    .then(result => {
        console.log(`User Removed Successfully \n ${result}`)
        res.json({
            status: "success",
            message: "User Removed Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removing User \n ${err}`)
        res.status(500).json({
            status: "error",
            message: "Error While Removing User",
            err
        })
    })
}


// User Tasks Start Here
let addTask = (req, res, next) => {
    console.log(req.body)
    let UserDetail = userTask(req.body)
    UserDetail.save()
    .then(result => {
        console.log(`Task Added Successfully!! \n ${result}`)
        res.json({
            status: "success",
            message: "Task Added Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding Task!! \n ${err}`)
        res.status(500).json({
            status: "error",
            message: "Error While Adding Task!!",
            err
        })
    })
}

let getTask = (req, res, next) => {
    userTask.findOne(req.body)
    .then(result => {
        if (!result)
        throw new Error("Task Not Found")
        console.log(`Task Found!! \n ${result}`)
        res.json({
            status: "success",
            message: "Task Found!!",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Task Not Found!! \n ${err}`)
        res.status(200).json({
            message: "Task Not Found!!",
            status: "error",
            err
        })
    })
}

let getTasks = (req, res, next) => {
    console.log(req.body, "request body ==========")
    userTask.find(req.body)
    .then(result => {
        if (result.length === 0)
        throw new Error("Task Not Found")
        console.log(`Task Found!! \n ${result}`)
        res.json({
            status: "success",
            message: "Task Found!!",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Task Not Found!! \n ${err}`)
        res.status(200).json({
            message: "Task Not Found!!",
            status: "error",
            err
        })
    })
}

let updateTask = (req, res, next) => {
    console.log("Api update ================== ", req.body)
    userTask.findOneAndUpdate({
        _id: req.body.id
    }, req.body)
    .then(result => {
        console.log(`Task Updated Successfully!! \n ${result}`)
        res.json({
            status: "success",
            message: "Task Updated Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Updating Task \n ${err}`)
        res.json({
            status: "error",
            message: "Error While Updating Task",
            err
        })
    })
    
}

let addMessage = (req, res, next) => {
    console.log(req.body)
    let UserDetail = userTask(req.body)
    UserDetail.save()
    .then(result => {
        console.log(`Message Added Successfully!! \n ${result}`)
        res.json({
            status: "success",
            message: "Message Added Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding Message!! \n ${err}`)
        res.status(500).json({
            status: "error",
            message: "Error While Adding Message!!",
            err
        })
    })
}

let deleteTask = (req, res, next) => {
    userTask.findOneAndRemove({_id: req.body.userId})
    .then(result => {
        console.log(`Task Removed Successfully \n ${result}`)
        res.json({
            status: "success",
            message: "Task Removed Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removing Task \n ${err}`)
        res.status(500).json({
            status: "error",
            message: "Task Removed Successfully",
            err
        })
    })
}


exports.addUser = addUser
exports.getUser = getUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.updateUser = updateUser
exports.addTask = addTask
exports.getTask = getTask
exports.getTasks = getTasks
exports.updateTask = updateTask
exports.deleteTask = deleteTask
exports.addMessage = addMessage