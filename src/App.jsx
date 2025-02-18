import React from "react";
import Menu from "./components/Menu";

const exercises = [
    { id: 1, name: "Running", type: "duration" },
    { id: 2, name: "Push-ups", type: "repetition" },
    { id: 3, name: "Crunches", type: "repetition" },
    { id: 4, name: "Swimming", type: "duration" },
];

export default function App() {
    return (
        <div>
            <Menu exercises={exercises} />
        </div>
    );
}