import { useState } from 'react';

// Resources used: 
// Webcourse: Ch 6 ppt
// https://www.w3schools.com/jsref/jsref_max.asp for Math.max to prevent negative rep count

function Counter() {
    const [count, setCount] = useState(0);

    function increaseRep() {
        setCount(count + 1);
    }
    function decreaseRep() {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    }
    function resetCount() {
        setCount(0);
    }

    return (
        <div className="rep-counter-display">
            <div className="count-display">{count} reps</div><br />
            <div className="counter-buttons">
                <button onClick={increaseRep} className="increase-count-button">Increase Count</button>
                <button onClick={decreaseRep} className="decrease-count-button">Decrease Count</button>
                <button onClick={resetCount} className="reset-button">Reset Count</button>
            </div>
        </div>
    );
}

export default Counter;