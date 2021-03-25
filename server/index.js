const express = require('express')
const { promisify } = require('util')
const mysql = require('mysql')
const credentials = require('./env/credentials')

const PORT = {
    dev: 8000,
    build: 3000
}

// EXPRESS
const server = express()

// DATABASE
const pool = mysql.createPool({
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

const query = promisify(pool.query).bind(pool)

const getProjects = async () => {
    const projects = await query("SELECT * FROM projects")
    return projects
}

// GET
server.get('/projects', (req,res) => {
    getProjects().then(r => res.json(r))
})

// LISTEN
server.listen(PORT.dev, () => {
    console.log(`SERVER Listening on port ${PORT.dev}`)
})