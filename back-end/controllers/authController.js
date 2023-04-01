const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.register = async (req,res,next) =>{
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({userId: user._id},process.env.APP_SECRET)
        res.status(200).json({
            status:'success',
            data:{token,userName: user.name}
        })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req,res,next) =>{
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
          // Error: Email is not correct
          const err = new Error('Email is not correct');
          err.statusCode = 400;
          return next(err);
        }
        if (bcrypt.compareSync(req.body.password,user.password)){
          const token = jwt.sign({userId: user._id},process.env.APP_SECRET)
          res.status(200).json({
            status: 'success',
            data:{
                token,userName: user.name
            }
          })
        }else {
            // Error:Password is not correct
            const err = new Error('Password is not correct');
            err.statusCode = 400;
            return next(err);
        }
    } catch (error) {
        res.json(error)
    }
}

// Get current User
exports.getCurrentUser = async (req,res,next) => {
    try {
        const data = {user: null}
        if (req.user) {
            const user = await User.findOne({_id: req.user.us});
            data.user = {userName: user.name}
        }
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error) {
        res.json(error);
    }
}