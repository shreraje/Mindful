import React from 'react';
import './Buttons.css';

// const TimerFormBtn = (props) => {
//     return(
//         <button className="breathingBtns" type="submit" onClick={props.set}>Set Time</button>
//     );
// };

const TimerStartBtn = (props) => {
    return(
        <button className="breathingBtns" onClick={props.start}>Begin</button>
    );
};

export { TimerStartBtn };