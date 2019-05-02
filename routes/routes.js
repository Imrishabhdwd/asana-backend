import express from 'express'
// import htm from '../view/index.html'
import fs from 'fs'
import path from 'path'
let router = express.Router();
import userRoutes from './user-routes'
import adminRoutes from './admin-routes'
router.use("/user", userRoutes)
router.use("/admin", adminRoutes)
router.use((req, res, next) => {
    res.status(500).json({
        status: "Page Not Found"
    })
})
module.exports = router