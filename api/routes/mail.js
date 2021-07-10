// ======================== //
// MAIL ROUTES              //
// ======================== //

import { Router } from 'express'
import { Transport, Message } from '../service/mail.js'

// CONFIG

const TransportService = new Transport(
    {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
    },
    {
        type: process.env.MAIL_TYPE,
        user: process.env.MAIL_USER,
        clientId: process.env.MAIL_CLIENTID,
        clientSecret: process.env.MAIL_CLIENTSECRET,
        refreshToken: process.env.MAIL_REFRESHTOKEN,
        accessToken: process.env.MAIL_PROCESSTOKEN
    }
)

const MessageConfig = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: process.env.MAIL_SUBJECT
}

// ROUTER
const router = Router()

// POST
router.post('v1/mail', (req,res) => {

    // Initialize transport
    let transport = TransportService.createTransport()

    // Create body
    let body = {
        name: req.body.name,
        email: req.body.mail,
        message: req.body.message
    }

    // Create message
    let message = new Message(
        MessageConfig,
        body
    ).getMessage()

    // Send mail and get response.
    transport.sendMail(message, (err, response) => {
        transport.close()
        if (err){
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
})


export default router