const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const mysql = require('mysql')
const databaseCredentials = require('./env/credentials')
const mailCredentials = require('./env/mail')
const nodemailer = require('nodemailer')
const mail = require('./env/mail')
const cors = require('cors')

const PORT = {
    dev: 8000,
    build: 3000
}

let pool
let query

// EXPRESS
const server = express()
server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors())

// DATABASE
const enableDatabase = () => {
    pool = mysql.createPool({
        host: credentials.host,
        port: credentials.port,
        user: credentials.user,
        password: credentials.password,
        database: credentials.database
    })

    pool.getConnection((err) => {
        if(err) throw err
        console.log("Connected!")
    })

    query = promisify(pool.query).bind(pool)

}

const getProjects = async () => {
    const projects = await query("SELECT * FROM projects")
    return projects
}

const getFeatured = async () => {
    const projects = await query("SELECT * FROM projects WHERE featured = 1")
    return projects
}

// GET
// server.get('/projects', (req,res) => {
//     getProjects().then(r => res.json(r))
// })

// server.get('/featured',(req,res) => {
//     getFeatured().then(r => res.json(r))
// })

// MAIL INTEGRATION
const createMessage = (props) => {
    return {
        from: mailCredentials.user,
        to: mailCredentials.destinationUser,
        subject: "Message from Personal Website",
        generateTextFromHTML: true,
        html: `<h1>${props.name}</h1><br/><p>Email: ${props.email}</p><br/><p>Message: ${props.message}</p>`
    }
}

server.post("/mail",(req,res) => {
    
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: mailCredentials.type,
            user: mailCredentials.user,
            clientId: mailCredentials.clientId,
            clientSecret: mailCredentials.clientSecret,
            refreshToken: mailCredentials.refreshToken,
            accessToken: mailCredentials.accessToken
        }
    });

    // GET NAME
    const name = req.body.name
    // GET MAIL
    const mail = req.body.mail
    // GET MESSAGE
    const message = req.body.message

    const msg = createMessage({name: name, email: mail, message: message})

    transport.sendMail(msg,(err,response) => {
        if(err){
            res.sendStatus(400)
        } else {
            res.sendStatus(200)
        }
        transport.close()
    })
    
})

// LISTEN
server.listen(PORT.dev, () => {
    console.log(`SERVER Listening on port ${PORT.dev}`)
})