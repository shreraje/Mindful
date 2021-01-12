const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('../../passport');

//Signup route
router.post('/', (req, res) => {
    console.log('USER SIGNUP POST ROUTE');

    const { username, password } = req.body;
    //ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('USER.JS POST ERROR: ', err)
        } else if (user) {
            res.json({
                error: `A user already exists with the username: ${username}`
            });
        } else {
            const newUser = new User({
                username: username,
                password: password
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            });
        };
    });
});

//Login route
router.post(
    '/login',
    function(req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body);
        next();
    },

    passpot.authenticate('local'),
    (req, res) => {
        console.log('LOGGED IN', req.user);
        const userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/welcome', (req, res, next) => {
    console.log('=======USER!!=====');
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: 'LOGGIN OUT' });
    } else {
        res.send({ msg: 'NO USER TO LOG OUT' });
    }
});

module.exports = router