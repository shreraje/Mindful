import axios from 'axios';

export default {
    getWorkouts: function() {
        return axios.get('/api/workouts/workouts')
    },

    postWorkouts: function(workoutData) {
        return axios.post('/api/workouts/workouts', workoutData);
    },

    // deleteWorkouts: function()

};