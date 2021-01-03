import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import { TimerFormBtn } from '../Buttons/Buttons';

const TimerForm = () => {

    const [time, setTime] = useState('');

    const handleInputChange = event => {
        setTime(event.target.value);
    };

    return(
        <div>
            <form>
                <input
                    placeholder="Select number of minutes"
                    type="text"
                    name="minutes"
                    value={time}
                    onChange={handleInputChange}
                />
            </form>
            <TimerFormBtn
                change={handleInputChange}
            />
            <Timer
                minutes={time}
            />
        </div>
    );
};

export default TimerForm;