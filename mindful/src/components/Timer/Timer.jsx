import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TimerStartBtn } from '../Buttons/Buttons';
import './Timer.css';

const Timer = (props) => {
    return(
        <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
                <div className="timer">
                    <span id="minutes-display" className="time-display">5</span>
                    <span id="seconds-display" className="time-display">:00</span>
                </div>
                <div className="btn-container">
                    <TimerStartBtn
                        start={props.start}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default Timer;

