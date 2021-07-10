// ======================== //
// CARLOSPOMARES API        //
// ======================== //

// DEPENDENCIES
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

// CONFIG
const CONFIG = {
    hostname: process.env.HOSTNAME,
    port: process.env.PORT
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
api.listen(
    CONFIG.port,
    CONFIG.hostname,
    () => {
        console.log(
            `API Listening on Hostname=${CONFIG.hostname}, Port=${CONFIG.port} over HTTP, PRODUCTION=${process.env.NODE_ENV == 'production'}`
        )
    }
)