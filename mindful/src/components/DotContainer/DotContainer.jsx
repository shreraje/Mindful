import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovingDot from '../Dots/Dots';
import './DotContainer.css';

const DotContainer = (props) => {
    return(
        <Row>
            <Col sm={12} md={12} lg={12} xl={12} className="dot-container">
                <MovingDot
                    dotClass={props.dotClass}
                />
            </Col>
        </Row>
    );
};

export default DotContainer;