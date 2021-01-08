import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovingDot from '../Dots/Dots';
import './DotContainer.css';

const DotContainer = (props) => {
    return(
        <Row>
            <Col sm={8} md={8} lg={8} xl={8} className="dot-container">
                <MovingDot
                    dotClass={props.dotClass}
                />
            </Col>
        </Row>
    );
};

export default DotContainer;