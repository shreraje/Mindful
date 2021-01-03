import React from 'react';
import './Dots.css';

const StationaryDot = () => {
    return(
        <span className="stationary"></span>
    );
};

const MovingDot = () => {
    return(
        <span className="moving"></span>
    );
};

export { StationaryDot, MovingDot };