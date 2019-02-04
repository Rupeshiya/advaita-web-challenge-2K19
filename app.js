const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
// use cors for cross-origin accessibility
app.use(cors());

//body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// session
app.use(cookieParser());
app.use(session({
    secret: process.env.secret,
    resave: true,
    saveUninitialized: false,
    cookie : {
        expires: false,
    },
    // session: true
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());
// calling passport strategy function
require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,'/dist/web-challenge')));
// app.use('/',path.join(__dirname,'/dist/mean/index.html'));


// connecting mongo
mongoose.connect(process.env.mongoUri,{ useNewUrlParser: true })
    .then(()=>{
        console.log('connected mongo');
    })
    .catch((err)=>{
        console.log(err);
    });

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/web-challenge/index.html'));
});

// test routes
app.get('/test',(req,res)=>{
    res.send('test works!!');
});

// users routes
const users = require('./server/users');
app.use('/users',users);

// for all other routes
app.get('**',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/mean/index.html'));
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});