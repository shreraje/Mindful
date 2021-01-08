import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { BreathingIntro, BreathingPractices } from '../BreathingIntro/BreathingIntro';
import Timer from '../Timer/Timer';
import DotContainer from '../DotContainer/DotContainer';
import techniqueData from '../../breathingPractices.json';
import './TimerForm.css';

const TimerForm = () => {
    const [dotClass, setDotClass] = useState('dot');
    const [techniques, setTechniques] = useState([]);

    useEffect(() => {
        setTechniques(techniqueData)
    }, []);

    //Begin timer and animation event
    const startTimer = () => {
        let totalMin = 5;
        let totalSec = totalMin * 60;
        let secondsLeft;
        let secondsElapsed = 0;

        //Begin dot animation event by setting className via state
        setDotClass('dot dot_1');

        //Timer Setup
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
                setDotClass('dot');
                clearInterval(interval);
            };
        }, 1000);
    };

    return(
        <Container>
            <BreathingIntro/>
                <Timer
                    start={startTimer}
                />
            <DotContainer
                dotClass={dotClass}
            />
            <Row>
                {techniques.map(item => {
                    return(
                        <BreathingPractices
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            desc={item.desc}
                        />
                    );
                })};
            </Row>
            
        </Container>
    );
};

export default TimerForm;