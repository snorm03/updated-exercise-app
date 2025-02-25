import React, { useState } from "react";
import DurationExercise from "./DurationExercise"; 
import RepetitionExercise from "./RepetitionExercise";
import GroupExercise from "./GroupExercise";

function Menu({ exercises }) {
    let [selectedExercise, setSelectedExercise] = useState(null);

    function handleBack() {
        setSelectedExercise(null);
    }

    if (selectedExercise) {
        return (
            <div className="selected-exercise"> 
                <h1>{selectedExercise.name}</h1>
                
                {selectedExercise.type === "duration" && (
                    <DurationExercise />
                )}
                
                {selectedExercise.type === "repetition" && (
                    <RepetitionExercise />
                )}

                 {selectedExercise.type === "group-class" && (
                    <GroupExercise />
                )}

                <button className="submit-button" onClick={handleBack}>Back to Menu</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Exercise Tracker</h1>
                {exercises.map((exercise) => (
                    <button className="menu-buttons" key={exercise.id} onClick={() => setSelectedExercise(exercise)}>
                    {exercise.name}
                </button>
                ))}
        </div>
    );
}

export default Menu;