require('dotenv').config()


//Connect DB
const {ConnectDB} = require('./configs/db')
ConnectDB();
const express = require('express');
const cors = require('cors');
const app = express()
const port= process.env.APP_PORT

app.use(cors())
app.use(express.json())

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})