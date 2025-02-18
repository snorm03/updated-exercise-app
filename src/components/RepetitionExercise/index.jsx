import Counter from "../Counter";

function RepetitionExercise({ exerciseName }) {
    return (
        <div className="exercise-name">
            <h2>{exerciseName}</h2> 
            <Counter />
            <div className="tutorial-links">
                <p>Exercise Tips</p>
                <p>Video Tutorial</p>
            </div>
        </div>
    );
}

export default RepetitionExercise;