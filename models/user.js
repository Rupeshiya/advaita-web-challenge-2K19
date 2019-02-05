const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

var userSchema = new  Schema({
    username:{
        type: String,
        required: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: false
    },
    password:{
        type: String,
        required: true,
    // minlength: 6
    },
    name:{
        type: String,
        require: true,
        // minlength: 3,
        unique: false
    }
});

module.exports = mongoose.model('Users',userSchema);
// created for using this in our function 
const Users = mongoose.model('Users',userSchema);

// function to find user by id
module.exports.getUserById = function(id,callback){
    Users.findById(id,callback);
};

// function to find user by username
module.exports.getUserByUsername = function(username,callback){
    const query = {username: username};
    Users.findOne(query,callback);
};

// function to add user
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                console.log(err);
            }
            // after hash changed plain password into hashed password
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
 
// function to compare passwordd
module.exports.comparePassword = function(candidatePassword, hash,callback){
    console.log('candidatePassword-', candidatePassword);
    console.log('hashPassword-',hash);
    bcrypt.compare(candidatePassword,hash,(err,isMatch) =>{
        if(err){
            console.log(err);
        }
        callback(null,isMatch);
    });
};
