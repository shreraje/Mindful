import React from 'react';
import './Timer.css';
import { TimerStartBtn } from '../Buttons/Buttons';

const Timer = (props) => {
    const startTimer = () => {
        let totalMin = document.getElementById('minutes-display').value;
        let totalSec = totalMin * 60;
        let secondsLeft = '';
        let secondsElapsed = 0;

        const interval = setInterval(() => {
            secondsElapsed++;
            secondsLeft = totalSec - secondsElapsed;
            let remainingMin = Math.floor(secondsLeft / 60);
            let remainderSeconds = secondsLeft % 60;

            document.getElementById('minutes-display').textContent = remainingMin;
            if(remainderSeconds < 10) {
                document.getElementById('seconds-display').textContent = "0" + remainderSeconds;
            } else {
                document.getElementById('seconds-display').textContent = remainderSeconds;
            }

            if(secondsLeft <= 0) {
                clearInterval(interval);
            };
        }, 1000);
    };

    return(
        <div>
            <div id="timer-container" className="timer">
                <div><span id="minutes-display" className="timeDisplay">{props.minutes}</span></div>
                <div><span id="seconds-display" className="timeDisplay">:00</span></div>
            </div>
            <TimerStartBtn
                start={startTimer}
            />
        </div>
    );
};

export default Timer;

