const mongoose = require('mongoose');
const { Schema } = mongoose;

const MeditationSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true
    },

    name: {
        type: String,
        trim: true,
        required: true
    },

    duration: {
        type: Number,
        trim: true,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
});

const Meditation = mongoose.model('Meditation', MeditationSchema);
module.exports = Meditation;

