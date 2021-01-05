import { PromiseProvider } from 'mongoose';
import React from 'react';
import './Buttons.css';

const TimerFormBtn = (props) => {
    return(
        <button className="breathingBtns" type="button" onClick={props.change}>Set Time</button>
    );
};

const TimerStartBtn = (props) => {
    return(
        <button className="breathingBtns" onClick={props.start}>Begin</button>
    );
};

export { TimerFormBtn, TimerStartBtn };