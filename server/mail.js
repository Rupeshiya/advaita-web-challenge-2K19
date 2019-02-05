const mongoose = require('mongoose');
const express = require('express');
const router = express.Router;
const nodemailer = require('nodemailer');
// const cron = require('node-cron');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: `${process.env.mailService}`,
    auth:{
        user: `${process.env.sendgridUsername}`,
        pass: `${process.env.sendgridPassword}`
    }
});

const mailOptions = {
    to: '',
    from: `${process.env.emailFrom}`,
    subject: 'Test',
    text: 'test'
};

const sendMail = () =>{
    transporter.sendMail(mailOptions,(err)=>{
        if(err){
            console.log('error in sending the mail !!');
        }
        console.log('successfully sent the mail !!');
    });
};


module.exports = {
    transporter,
    mailOptions,
    sendMail
};