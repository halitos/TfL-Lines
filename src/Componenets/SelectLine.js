import React, { useState, useEffect } from "react";

const SelectLine = ({ mode, handleSelectedLine }) => {
  const [lines, setLines] = useState();

  useEffect(() => {
    if (!mode) return;
    fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`)
      .then((res) => res.json())
      .then((data) => setLines(data));
  }, [mode]);

  function handleChange(event) {
    handleSelectedLine(event.target.value);
  }
  if (lines !== undefined) {
    return (
      <div>
        <select onChange={handleChange}>
          <option>Select a Line...</option>
          {lines.map((ln, index) => {
            return (
              <option key={index} value={ln.name}>
                {ln.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else {
    return "";
  }
};

export default SelectLine;
