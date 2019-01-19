const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const mongoose= require('mongoose');
var User= mongoose.model('User');

passport.use(new LocalStrategy({usernameField:'email'},
    function(username, password, done) {
      User.findOne({ email: username}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false,{message:'Email not found'}); }
        if (!user.verifyPassword(password)) { return done(null, false,{message:'password not found'}); }
        return done(null, user);
      });
    }
  ));