const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//User schema for registration and login 
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },

    password: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        min: 8,
        max: 20
    },

    userCreated: {
        type: Date,
        default: Date.now
    }
});

//Hooks for pre-saving
UserSchema.pre('save', function(next) {
    if(!this.isModified('password')) {
        return next();
    } else {
        bcrypt.hash(this.password, 10, (err, passwordHash) => {
            if(err) {
                return next(err);
            } else {
                this.password = passwordHash;
                next();
            }
        });
    }
});

//Compare plaintext password to hashed verson in DB
UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err) {
            return cb(err);
        } else {
            if(!isMatch) {
                return cb(null, isMatch);
            } else {
                return cb(null, this);
            }
        }
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;