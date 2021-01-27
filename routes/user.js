const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user');

const signToken = userID => {
    return JWT.sign({ 
        iss: 'Mindfulkey',
        sub: userID
    }, 'Mindfulkey', { expiresIn: '1h' });
};

//User registration route
userRouter.post('/register', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if(err) {
            res.status(500).json({ message: {msgBody: 'Error has occured', msgError: true }});
        }
        if(user) {
            res.status(400).json({ message: {msgBody: 'Username is already taken', msgError: true }});
        } else {
            const newUser = new User({ username, password });
            newUser.save(err => {
                if(err) {
                    res.status(500).json({ message: {msgBody: 'Error has occured', msgError: true }});
                } else {
                    res.status(201).json({ message: {msgBody: 'Account successfully registered', msgError: false }}); 
                }
            });
        }
    });
});

//User login route
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if(req.isAuthenticated()) {
        const { _id, username } = req.user;
        const token = signToken(_id);
        //Prevent attacks to obtain JWT token
        res.cookie('access_toekn', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username } });
    }
});

//User logout 
userRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    //Remove JWT access token from cookie cache
    res.clearCookie('access_token');
    res.json({ user: { username: '' }, success: true});
});


module.exports = userRouter;