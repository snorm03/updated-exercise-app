import { useEffect, useState, useRef } from 'react';

//Resources used:
// Webcourse Video: useEffect with Timer
// https://www.youtube.com/watch?v=jPo0mIcNZfM for timer format and time conversions
// https://dev.to/kartikbudhraja/building-a-stopwatch-in-react-1nb3 for stopping and resetting time 

function Timer() {
    const [running, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        if (!running) return;
        const start = Date.now() - elapsedTime;
        const interval = setInterval(() => {
            setElapsedTime(Date.now() - start);
        }, 10);
        return () => clearInterval(interval);
    }, [running]);

    function start() {
        setRunning(true);
    }

    function stop() {
        setRunning(false);
    }

    function reset() {
        setRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
        let minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, "0");
        let seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");
        let milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="timer">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default Timer;