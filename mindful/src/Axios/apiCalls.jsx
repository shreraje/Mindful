import axios from 'axios';

export default {
    getWorkouts: function() {
        return axios.get('/api/workouts/workouts')
    },
};