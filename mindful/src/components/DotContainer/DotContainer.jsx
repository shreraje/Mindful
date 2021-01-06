import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StationaryDot, MovingDot } from '../Dots/Dots';

const DotContainer = () => {
    return(
        <Row>
            <Col sm={8} md={8} lg={8} xl={8}>
                <StationaryDot/>
                <MovingDot/>
            </Col>
        </Row>
    );
};

export default DotContainer;