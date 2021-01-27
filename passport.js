const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/user');

//Get user JWT
const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies['access_token'];
    }
    return token;
};

//Cookie is set in clients browser with the JWT
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "Mindfulkey"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if(err) {
            return done(err, false);
        }
        if(user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));

//Authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        //DB error
        if(err) {
            return done(err);
        }
        //No user exists in DB
        if(!user) {
            return done(null, false);
        }
        //ComparePassword located in user model
        user.comparePassword(password, done);
    });
}));