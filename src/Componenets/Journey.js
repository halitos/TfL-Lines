import React, { useState, useEffect } from "react";
import "./Journey.css";

const Journey = ({ line }) => {
  const [lineInfo, setLineInfo] = useState();

  useEffect(() => {
    if (!line) return;
    fetch(`https://api.tfl.gov.uk/Line/${line}/Route`)
      .then((res) => res.json())
      .then((lineInfo) => setLineInfo(lineInfo));
  }, [line]);

  if (!lineInfo) {
    return null;
  } else {
    return (
      <div className="info-box">
        <h2 className="info-header">
          {lineInfo.modeName}: {lineInfo.name}
        </h2>
        <div className="info-side">
          <div className="info-start">
            <h3>Start of Line</h3>
            <div>{lineInfo.routeSections[0].originationName}</div>
          </div>
          <div className="info-end">
            <h3>End of Line</h3>
            <div>{lineInfo.routeSections[0].destinationName}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Journey;
