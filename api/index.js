// ======================== //
// CARLOSPOMARES API        //
// ======================== //

// DEPENDENCIES
import express from 'express'
import https from 'https'
import cors from 'cors'
import fs from 'fs'
import compression from 'compression'
import helmet from 'helmet'

// CONFIG
const CONFIG = {
    hostname: process.env.HOSTNAME,
    port: process.env.PORT,
    key: process.env.CERT_KEY,
    cert: process.env.CERT_SECRET
}

// INIT

const api = express()

// MIDDLEWARES

api.use(express.urlencoded({extended: true}))
api.use(express.json())
api.use(cors())
api.use(compression())
api.use(helmet())

// ROUTES

import mail from './routes/mail.js' // MAIL ROUTES
api.use(mail)

// LISTEN

if (process.env.PROTOCOL == "https") {
    https.createServer(
        {
            key: fs.readFileSync(CONFIG.key),
            cert: fs.readFileSync(CONFIG.cert)
        },api
    ).listen(
        CONFIG.port,
        CONFIG.hostname,
        () => {
            console.log(
                `API Listening on Hostname=${CONFIG.hostname}, Port=${CONFIG.port} over HTTPS, PRODUCTION=${process.env.NODE_ENV == 'production'}`
            )
        }
    )
} else {
    api.listen(
        CONFIG.port,
        CONFIG.hostname,
        () => {
            console.log(
                `API Listening on Hostname=${CONFIG.hostname}, Port=${CONFIG.port} over HTTP, PRODUCTION=${process.env.NODE_ENV == 'production'}`
            )
        }
    )
}