import { useState } from "react";
import ClassInfo from "../ClassInfo.jsx";
import SavedClassInfo from "../SavedClassInfo.jsx";

//Resources Used:
//https://react.dev/learn/conditional-rendering for utilizing the ternary operator

function GroupExercise({ exerciseName }) {
    const [showForm, setShowForm] = useState(true);
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <h2>{exerciseName}</h2>
            {showForm ? (
                <ClassInfo 
                    setSelectedOption={setSelectedOption} 
                    setShowForm={setShowForm} 
                />
            ) : (
                <SavedClassInfo 
                    selectedOption={selectedOption} 
                    setShowForm={setShowForm} 
                />
            )}
        </div>
    );
}

export default GroupExercise;