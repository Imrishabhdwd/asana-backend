import adminModel from '../model/admin-model'

let addAdmin = (req, res, next) => {
    let adminDetail = adminModel(req.body)
    adminDetail.save()
    .then(result => {
        console.log(`Admin Added Successfully!!! \n ${result}`)
        res.json({
            status: "Admin Added Successfully!!",
            result
        })
    })
    .catch(err => {
        console.log('Error While Adding Admin!!!')
        res.status(500).json({
            status: "Error While Adding Admin",
            err
        })
    })
}

let getAdmin = (req, res, next) => {
    adminModel.findOne(req.body)
    .select("-password")
    .then(result => {
        if (!result)
        throw new Error("User Not Found")
        console.log(`User Found!! \n ${result}`)
        res.json({
            status: "User Found !!",
            result
        })
    })
    .catch(err => {
        console.log(`Error, User Not Found!! \n ${err}`)
        res.status(200).json({
            error: "Account with this login not found",
            status: "error"
        })
    })
}

let updateAdmin = (req, res, next) => {
    adminModel.findOneAndUpdate({_id: req.body.id}, req.body, {runValidators: true})
    .select("-password")
    .then(result => {
        console.log(`Admin Updated Successfully!! \n ${result}`)
        res.json({
            status: "Admin Updated Successfully!!",
            result
        })
    })
}

let deleteAdmin = (req, res, next) => {
    adminModel.findOneAndRemove({id: req.body.id})
    .then(result => {
        console.log(`Admin Removed Sucessfully!! \n ${result}`)
        res.json({
            status: "Admin Removed Successfully", 
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removing Admin \n ${err}`)
        res.status(500).json({
            status: "Admin Removed Successfully!!!!!",
            err
        })
    })
}

exports.addAdmin = addAdmin
exports.getAdmin = getAdmin
exports.updateAdmin = updateAdmin
exports.deleteAdmin = deleteAdmin