function SavedClassInfo({ selectedOption, setShowForm }) {
    return (
      <div className="info-display">
        <h2>Your Selection:</h2>
        <p>{selectedOption || "No selection made"}</p>
        <button onClick={() => setShowForm(true)}>Edit</button>
      </div>
    );
}

export default SavedClassInfo;