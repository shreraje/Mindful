import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import TimerForm from '../components/TimerForm/TimerForm';
import { Jumbotron } from 'react-bootstrap';

function BreathingExercise() {
    return(
        <div>
            <Navbar/>
            <Jumbotron>
                <TimerForm/>    

            </Jumbotron>
        </div>
    );
};

export default BreathingExercise;