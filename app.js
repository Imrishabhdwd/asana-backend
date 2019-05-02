import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import bodyParser from 'body-parser'
import config from './config/config'
import path from 'path'
import multer from 'multer'
import env from 'dotenv'
let app = express()
app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
env.load()
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+"/"+Date.now())
    }
})
let upload = multer({ storage: storage })
let port = process.env.PORT || 1234
app.use(routes)
app.listen(port, console.log(`listening at port ${port}`))