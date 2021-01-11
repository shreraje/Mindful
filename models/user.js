const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//User schema for login 
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

// Define schema methods
UserSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

// Define hooks for pre-saving
UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next();
	}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;