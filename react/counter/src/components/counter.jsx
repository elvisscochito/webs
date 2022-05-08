import React, { useState } from 'react';

import '../styles/counter.css';

function Counter() {
    const [counterState, setCounterState] = useState ({
        number: 0
    });

    const changeStateHandlerAdd = () => {
        setCounterState (previousState => ({
            number: counterState.number + 1
        }));
    }

    const changeStateHandlerRemove = () => {
        setCounterState (previousState => ({
            number: counterState.number - 1
        }));
    }

    const changeStateHandlerReset = () => {
        setCounterState (previousState => ({
            number: counterState.number = 0
        }));
    }

    return (
        <>
            <div>
                {counterState.number}
            </div>

            <span>
                <button className="button success" onClick={changeStateHandlerAdd}>Add</button>

                <button className="button danger" onClick={changeStateHandlerRemove} disabled={counterState.number === 0}>Remove</button>

                <button className="button reset" onClick={changeStateHandlerReset} disabled={counterState.number === 0}>Reset</button>
            </span>
        </>
    );
};

export default Counter;
