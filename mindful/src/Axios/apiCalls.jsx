import axios from 'axios';

export default {
    getWorkouts: function() {
        return axios.get('/api/workouts/workouts')
    },
<<<<<<< HEAD

    postWorkouts: function(workoutData) {
        return axios.post('/api/workouts/workouts', workoutData);
    },

    // deleteWorkouts: function()

=======
>>>>>>> b7c5a92b233cfa2be6803d6689d7c6174cc58ebf
};