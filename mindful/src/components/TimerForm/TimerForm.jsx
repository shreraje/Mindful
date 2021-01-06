import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BreathingIntro from '../BreathingIntro/BreathingIntro';
import Timer from '../Timer/Timer';
import DotContainer from '../DotContainer/DotContainer';
import './TimerForm.css';

const TimerForm = () => {
    // const [time, setTime] = useState('');

    // //Handle change to form
    // const handleInputChange = event => {
    //     setTime(event.target.value);
    // };

    // //Set the time that the user selected
    // const submitTime = event => {
    //     event.preventDefault();
    //     console.log(event.target.value);
    //     setTime(event.target.value);
    // };

    //Handle dot animations when timer is started 
    const beginAnimation = () => {
        const animatedDot = document.getElementById('moving');
        console.log(animatedDot);
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

    //Begin timer and animation event
    const startTimer = () => {
        let timesUp = false;
        let totalMin = 5;
        let totalSec = totalMin * 60;
        let secondsLeft;
        let secondsElapsed = 0;

        const interval = setInterval(() => {
            secondsElapsed++;
            secondsLeft = totalSec - secondsElapsed;
            let remainingMin = Math.floor(secondsLeft / 60);
            let remainderSeconds = secondsLeft % 60;

            document.getElementById('minutes-display').textContent = `${remainingMin}:`
            if(remainderSeconds < 10) {
                document.getElementById('seconds-display').textContent = "0" + remainderSeconds;
            } else {
                document.getElementById('seconds-display').textContent = remainderSeconds;
            }

            if(secondsLeft <= 0) {
                timesUp = true;
                clearInterval(interval);
            };

            while(timesUp !== true) {
                beginAnimation();
            };
        }, 1000);

        
    };

    return(
        <Container>
            <BreathingIntro/>
            {/* <Row>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <Form id="form-container">
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
                                It is recommended you perform this exericse for a minimum 2 minutes
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <TimerFormBtn
                        set={submitTime}
                    />
                </Col>
            </Row> */}

            <Row>
                <Col sm={4} md={4} lg={4} xl={4}>
                    <Timer
                        start={startTimer}
                        // minutes={time}
                        // animate={beginAnimation}
                    />
                </Col>
            </Row>
            <DotContainer/>
        </Container>
    );
};

export default TimerForm;