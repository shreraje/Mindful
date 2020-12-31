const mongoose = require('mongoose');

const MindfulSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Mindful = mongoose.model('Mindful', MindfulSchema);

module.exports = Mindful;