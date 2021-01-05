import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './TimerForm.css';
import Timer from '../Timer/Timer';
import { TimerFormBtn } from '../Buttons/Buttons';
import DotContainer from '../DotContainer/DotContainer';

const TimerForm = () => {
    const [time, setTime] = useState('');

    //Handle change to form
    const handleInputChange = event => {
        setTime(event.target.value);
    };

    //Handle dot animations when timer is started 
    const animatedDot = document.querySelector('#moving');
    const beginAnimation = () => {
        animatedDot.classList.add('expand');
        const expanded = document.querySelector('.expand');
        expanded.onanimationend = () => {
            animatedDot.classList.remove('expand');
            animatedDot.classList.add('contract');
            const contracted = document.querySelector('.contract');
            contracted.onanimationend = () => {
                animatedDot.classList.remove('contract');
                animatedDot.classList.add('expand');
                beginAnimation();
            };
        };
    };

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label id="form-header">Box breathing practice!</Form.Label>
                    <Form.Control 
                        id="form-control"
                        type="text" 
                        placeholder="Enter a time limit"
                        name="minutes"
                        value={time}
                        onChange={handleInputChange}
                    />
                    <Form.Text id="form-text">
                        It is recommended you perform this exericse for a minimum 1 minute
                    </Form.Text>
                </Form.Group>
            </Form>
            <TimerFormBtn
                change={handleInputChange}
            />
            <Timer
                minutes={time}
                animate={beginAnimation}
            />
            <DotContainer/>
        </div>
    );
};

export default TimerForm;