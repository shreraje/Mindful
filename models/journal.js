const mongoose = require('mongoose');
const { Schema } = mongoose;

const JournalSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    text: {
        type: String,
        trim: true,
        validate: [({ length }) => length >= 1 && length <= 3000, "Entries cannot be longer than 3000 characters"]
    }
});


const Journal = mongoose.model('Journal', JournalSchema);
module.exports = Journal;