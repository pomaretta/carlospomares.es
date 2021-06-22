// ======================== //
// MAIL SERVICE             //
// ======================== //

import nodemailer from 'nodemailer'

class Message {

    constructor({ from, to, subject }, { name, email, message }){
        
        // Mail credentails and direction
        this.from = from
        this.to = to
        this.subject = subject

        // Body message
        this.body = {
            name: name,
            email: email,
            message: message
        }

    }

    getMessage(){
        return {
            from: this.from,
            to: this.to,
            subject: this.subject,
            generateTextFromHTML: true,
            html: `<h1>${this.body.name}</h1><br/><p>Email: ${this.body.email}</p><br/><p>Message: ${this.body.message}</p>`
        }
    }

}

class Transport {

    constructor(
        { host, port, secure },
        {
            type,
            user,
            clientId,
            clientSecret,
            refreshToken,
            accessToken
        }
    ) {

        // Basic typos
        this.host = host
        this.port = port
        this.secure = secure

        // Auth
        this.auth = {
            type: type,
            user: user,
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
            accessToken: accessToken
        }

    }

    createTransport(){
        return nodemailer.createTransport(
            {
                host: this.host,
                port: this.port,
                secure: this.secure,
                auth: this.auth
            }
        )
    }

}

module.exports = {
    Message,
    Transport
}