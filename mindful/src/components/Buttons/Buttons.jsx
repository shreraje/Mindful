import { PromiseProvider } from 'mongoose';
import React from 'react';

const TimerFormBtn = (props) => {
    <button type="button" onClick={props.change}>Set Time</button>
};

const TimerStartBtn = (props) => {
    <button onClick={props.start}></button>
};

export { TimerFormBtn, TimerStartBtn };