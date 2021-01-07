import React from 'react';
import './Dots.css';

const MovingDot = (props) => {
    return(
        <div className={props.dotClass}></div>
    );
};

export default MovingDot;