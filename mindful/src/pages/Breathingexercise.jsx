import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import TimerForm from '../components/TimerForm/TimerForm';
import { Jumbotron } from 'react-bootstrap';
import Footer from '../components/Footer/Footer'

function BreathingExercise() {
    return(
        <div>
            <Navbar/>
            <Jumbotron>
                <TimerForm/>   
            </Jumbotron>
            <Footer/>
        </div>
    );
};

export default BreathingExercise;