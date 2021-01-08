import React from 'react';
import { TimerStartBtn } from '../Buttons/Buttons';
import './Timer.css';

const Timer = (props) => {
    return(
        <div>
            <div className="timer">
                <span id="minutes-display">5</span>
                <span id="seconds-display">:00</span>
            </div>
            <TimerStartBtn
                start={props.start}
            />
        </div>
    );
};

export default Timer;

