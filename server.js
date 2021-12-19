"use strict";

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/pub')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pub/landingPage.html'))
})

app.get('/examples-cyclit', (req, res) => {
    res.sendFile(path.join(__dirname, '/pub/examples.html'))
})

app.get('/api-cyclit', (req, res) => {
    res.sendFile(path.join(__dirname, '/pub/api.html'))
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})