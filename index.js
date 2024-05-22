require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

// create express server
const server = express()

//use packages to server
server.use(cors())
server.use(express.json())
server.use(router)

// create port where server should listen
const PORT = process.env.PORT || 3100

// run server
server.listen(PORT,()=>{
    console.log(`Touch World Server Started at port: ${PORT}`);
})

// resolve get req to localhost:3000
server.get('/',(req,res)=>{
    res.status(200).json("Touch World Server Started burger !!!")
})
