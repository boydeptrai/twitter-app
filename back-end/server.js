require('dotenv').config()


//Connect DB
const {ConnectDB} = require('./configs/db')
ConnectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute')
const postRoute = require('./routes/postRoute')
const {register} = require('./controllers/authController')
const app = express()
const port= process.env.APP_PORT

app.use(cors())
app.use(express.json())

//Mount the router
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/posts',postRoute)

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})