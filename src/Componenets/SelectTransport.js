import React, { useState, useEffect } from "react";
import "./SelectTransport.css";

const SelectTransport = ({ handleSelectedMode }) => {
  const [transport, setTransport] = useState();

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setTransport(data));
  }, []);

  function handleChange(event) {
    if (event.target.value) {
      handleSelectedMode(event.target.value);
    }
  }

  if (transport !== undefined) {
    return (
      <div className="mode-selector">
        <h4>Select a Transport Mode and a Line</h4>
        <select className="selector" onChange={handleChange}>
          <option>Chose a Mode...</option>
          {transport.map(function (mode, index) {
            return (
              <option key={index} value={mode.modeName}>
                {mode.modeName}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else return "";
};

export default SelectTransport;
