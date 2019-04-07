const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { sendMail ,mailOptions } = require('../server/mail');
const { ensureAuthenticated } = require('../helpers/auth');

// loading model
require('../models/user');
const User = require('../models/user');

// =========================== REGISTER =========================================== //
// ================================================================================ //

// /users/register route
router.post('/register',(req,res)=>{
    // res.send('register works!!')
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    User.addUser(newUser,(err,user)=>{
        if(err){
            console.log('error in users.js',err);
            res.status(500).json({success:false, msg: 'unable to register'});
        } else {
            // /users/register route
            mailOptions.to = req.body.email;
            mailOptions.subject = 'Successfully registered !!';
            mailOptions.text = `Hi ${user.username}\n\n` + 'Welcome to the world of auction !!\n' + 'Happy auction !!';
            sendMail();
            res.status(200).json({success: true, msg: 'User registered'});
        }
    });
});

// =============================== AUTHENTICATION ================================== //
// ================================================================================= //

// /users/authenticate route
router.post('/authenticate',(req,res)=>{
    // res.send('auth works!!!');
    const username =  req.body.username;
    const password =  req.body.password;
    User.getUserByUsername(username,(err,user)=>{
        if(err){
            console.log('error in username ',err);
        }
        if(!user){
            return res.json({success: false,msg:'user does not exists'});
        } 
        // compare password for authentication
        // user.password is hashed password
        User.comparePassword(password, user.password,(err,isMatch)=>{
            if(err){
                console.log('error in users.js ',err);
            }
            if(isMatch){
                // making token
                const token = jwt.sign({data: user}, `${process.env.secret}`, {
                    expiresIn: 604800 // 1 week
                });
                // sending response to the front-end
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// ================================== PROFILE ====================================== //
// ================================================================================= //

// /users/profile route
router.get('/profile',(req,res)=>{
    // res.send('profile works!!');
    console.log('user info-',req.user);
    res.status(200).json({success: true,msg:'user data retrieved',user: req.user});
});

// /users/validate route
router.get('/validate',(req,res)=>{
    res.send('validate works!!');
});


module.exports = router;