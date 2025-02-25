import { useState } from "react";

function ClassInfo({ setSelectedOption, setShowForm }) {
    const [selectedDuration, setSelectedDuration] = useState("");
    const [selectedIntensity, setSelectedIntensity] = useState("");

    const handleSave = () => {
        if (selectedDuration && selectedIntensity) {
            setSelectedOption(`Duration: ${selectedDuration}, Intensity: ${selectedIntensity}`);
            setShowForm(false);
        } else {
            alert("Please select duration AND intensity.");
        }
    };

    //Resources Used: 
    //https://react.dev/reference/react-dom/components/select for setting onChange value 

    return (
        <div className="class-info-display">
            <div className="set-duration">
                <h2>Select Duration</h2>
                <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
                    <option value="">Select</option>
                    <option value="5 minutes">5 minutes</option>
                    <option value="10 minutes">10 minutes</option>
                    <option value="15 minutes">15 minutes</option>
                    <option value="20 minutes">20 minutes</option>
                    <option value="25 minutes">25 minutes</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="45 minutes">45 minutes</option>
                    <option value="1 hour">1 hour</option>
                    <option value="2 hours">2 hours</option>
                    <option value="3 hours">3 hours</option>
                </select>
            </div>

            <div className="set-intensity">
                <h2>Select Intensity</h2>
                <select value={selectedIntensity} onChange={(e) => setSelectedIntensity(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Difficult">Difficult</option>
                    <option value="Extreme">Extreme</option>
                </select>
            </div>
            <button className="save-button" onClick={handleSave}>Save</button>
        </div>
    );
}

export default ClassInfo;