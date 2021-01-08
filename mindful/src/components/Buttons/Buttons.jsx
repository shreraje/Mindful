import React from 'react';
import { Button } from 'react-bootstrap';
import './Buttons.css';

const TimerStartBtn = (props) => {
    return(
        <Button className="breathingBtns" onClick={props.start} disabled={props.able}>Begin</Button>
    );
};

export { TimerStartBtn };