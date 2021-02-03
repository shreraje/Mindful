const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
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
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;