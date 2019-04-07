var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function (passport) {
  var opts = {}; // options
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = `${process.env.secret}`;
  //payload contains the userinfo
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log('jwt_payload info', jwt_payload);
    // error is here
    User.getUserById({
      id: jwt_payload.data._id
    }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }));
};
