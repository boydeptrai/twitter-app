require('dotenv').config()


//Connect DB
const {ConnectDB} = require('./configs/db')
ConnectDB();

const express = require('express');
const cors = require('cors');
// Import error handler
const {errorHandler} = require('./middlewares/errorHandler')
const authRoute = require('./routes/authRoute')
const postRoute = require('./routes/postRoute')
const {register} = require('./controllers/authController')
const app = express()

app.use(cors())
app.use(express.json())

//Mount the router
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/posts',postRoute)

// Unhandled Route
app.all('*',(req,res,next) =>{
    const err = new Error('The route can not be found');
    err.status = 404;
    next(err)
})
app.use(errorHandler)
const port= process.env.APP_PORT
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})