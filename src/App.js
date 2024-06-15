import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentFloor, setCurrentFloor] = useState(-1);
  const [targetFloor, setTargetFloor] = useState(0);

  const handleUp = () => {
    if (currentFloor < 12) setCurrentFloor(currentFloor + 1);
  };

  const handleDown = () => {
    if (currentFloor > -1) setCurrentFloor(currentFloor - 1);
  };

  const handleFloorChange = (event) => {
    setTargetFloor(Number(event.target.value));
  };

  const moveToFloor = () => {
    if (targetFloor >= -1 && targetFloor <= 12) {
      setCurrentFloor(targetFloor);
    }
  };

  return (
    <div className="App">
      <div className="lift-container">
        <div
          className="lift"
          style={{ bottom: `${((currentFloor + 1) / 14) * 100}% ` }}
        >
          <p>{currentFloor}</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-button" onClick={handleUp}>
          Up
        </button>
        <button className="control-button" onClick={handleDown}>
          Down
        </button>
        <input
          className="floor-input"
          type="number"
          value={targetFloor}
          onChange={handleFloorChange}
          min="-1"
          max="12"
        />
        <button className="control-button" onClick={moveToFloor}>
          Go
        </button>
      </div>
    </div>
  );
}

export default App;
