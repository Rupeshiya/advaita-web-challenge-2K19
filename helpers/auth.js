const express = require('express');

module.exports = {
    ensureAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
    },
    ensureGuest: function(req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/profile');
        } else{
            return next();
        }
    }
};


