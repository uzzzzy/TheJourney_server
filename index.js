//config
const apiVersion = 1
const port = 5000

//
const express = require('express')

const app = express()

const router = require(`./src/v${apiVersion}/routes`)

// run
app.use(express.json())

app.use(`/api/v${apiVersion}`, router)

app.use(express.static(__dirname + '/html'))

app.listen(port, () => console.log(`Listening on port ${port}`))
