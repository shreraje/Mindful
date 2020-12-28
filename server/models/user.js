const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User login schema
const UserSchema = new Schema({
    email: {
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
        validate: [({ length }) => length >= 8, 'Password requires minimum 8 characters']
    },

    userCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;