import express from 'express'
import adminController from '../controller/admin-controller'

let router = express.Router()

router.post('/add-admin', adminController.addAdmin)
router.post('/get-admin', adminController.getAdmin)
router.post('/update-admin', adminController.updateAdmin)
router.post('/delete-admin', adminController.deleteAdmin)

module.exports = router