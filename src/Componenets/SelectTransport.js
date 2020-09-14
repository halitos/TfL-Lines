import React, { useState, useEffect } from "react";
import "./SelectTransport.css";

const SelectTransport = () => {
  const [transport, setTransport] = useState();

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setTransport(data));
  }, []);

  if (transport) {
    return (
      <div className="mode-selector">
        <label>Please Select a Transport Mode</label>
        <select className="mod-select">
          <option>Chose a Mode...</option>
          {transport.map((mode, index) => {
            return <option key={index}>{mode.modeName}</option>;
          })}
        </select>
      </div>
    );
  } else return "loading";
};

export default SelectTransport;
