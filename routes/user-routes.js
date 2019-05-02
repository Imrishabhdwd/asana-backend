import express from 'express'
import userController from '../controller/user-controller'

let router = express.Router()

router.post('/add-user', userController.addUser)
router.post('/get-user', userController.getUser)
router.post('/get-users', userController.getUsers)
router.post('/update-user', userController.updateUser)
router.post('/delete-user', userController.deleteUser)
router.post('/add-task', userController.addTask)
router.post('/get-task', userController.getTask)
router.post('/get-tasks', userController.getTasks)
router.post('/update-task', userController.updateTask)
router.post('/delete-task', userController.deleteTask)
router.post('/delete-task', userController.deleteTask)
router.post('/add-message', userController.addMessage)
module.exports = router