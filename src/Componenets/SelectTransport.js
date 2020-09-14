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
        <label>Please Select a Transport Mode</label>
        <select className="mod-select" onChange={handleChange}>
          <option>Chose a Mode...</option>
          {transport.map((mode, index) => {
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
