import Timer from "../Timer";

function DurationExercise({ exerciseName }) {
    return (
        <div>
            <h2>{exerciseName}</h2> 
            <Timer />
            <div className="tutorial-links">
                <p>Exercise Tips</p>
                <p>Video Tutorial</p>
            </div>
        </div>
    );
}

export default DurationExercise;