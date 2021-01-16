const mongoose = require('mongoose');
const { Schema } = mongoose;

const JournalSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    exercises: 
        {
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
            } 
        }
    ,

    meditations: 
        {
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
        }
    ,

    text: {
        type: String,
        trim: true,
        validate: [({ length }) => length >= 1 && length <= 3000, "Entries cannot be longer than 3000 characters"]
    }
},
//Virtual property for total exercise/meditation time durations
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

JournalSchema.virtual('totalExerciseDuration')
.get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

JournalSchema.virtual('totalMeditationDuration')
.get(function() {
    return this.meditations.reduce((total, meditation) => {
        return total + meditation.duration;
    }, 0);
});

const Journal = mongoose.model('Journal', JournalSchema);
module.exports = Journal;