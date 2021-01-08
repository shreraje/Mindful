
// import { PromiseProvider } from 'mongoose';
import React from 'react';
import './Buttons.css';

const TimerStartBtn = (props) => {
    return(
        <button className="breathingBtns" onClick={props.start}>Begin</button>
    );
};

export { TimerFormBtn, TimerStartBtn };