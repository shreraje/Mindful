import React from 'react';
import { StationaryDot, MovingDot } from '../Dots/Dots';

const DotContainer = () => {
    return(
        <div>
            <StationaryDot/>
            <MovingDot/>
        </div>
    );
};

export default DotContainer;