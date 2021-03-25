const express = require('express')

const PORT = {
    dev: 8000,
    build: 3000
}

const server = express()

server.get('/projects', (req,res) => {
    res.json({status:200})
})

server.listen(PORT.dev, () => {
    console.log(`SERVER Listening on port ${PORT.dev}`)
})