const express = require('express')
const { promisify } = require('util')
const mysql = require('mysql')
const credentials = require('./env/env')

const PORT = {
    dev: 8000,
    build: 3000
}

// EXPRESS
const server = express()

// DATABASE
const pool = mysql.createPool(credentials)
const query = promisify(pool.query).bind(pool)

const getProjects = async () => {
    const projects = await query("SELECT * FROM projects")
    return projects
}

// GET
server.get('/projects', (req,res) => {
    getProjects().then(r => res.send(r))
})

// LISTEN
server.listen(PORT.dev, () => {
    console.log(`SERVER Listening on port ${PORT.dev}`)
})