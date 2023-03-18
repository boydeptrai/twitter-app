const mongoose = require('mongoose');


const ConnectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Connected to MongoDB!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = {ConnectDB}