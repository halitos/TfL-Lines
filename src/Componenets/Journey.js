import React, { useState, useEffect } from "react";
import "./Journey.css";

const Journey = ({ line }) => {
  const [lineInfo, setLineInfo] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    if (!line) return;
    fetch(`https://api.tfl.gov.uk/Line/${line}/Route`)
      .then((res) => res.json())
      .then((lineInfo) => setLineInfo(lineInfo));
  }, [line]);

  if (!lineInfo) {
    return null;
  } else if (!lineInfo.routeSections) {
    return <h3>Sorry, information for this line is not available</h3>;
  } else {
    return (
      <div className="info-box">
        <h2 className="info-header">
          {lineInfo.modeName}: {lineInfo.name}
        </h2>
        <div className="info-side">
          <div className="info-start">
            <div className="img-wrapper">
              <img src="/tfl-logo2.png" alt="logo" className="tfl-logo"></img>
            </div>
            <div className="text-wrapper">
              <h3>Start of Line</h3>
              <p>{lineInfo.routeSections[0].originationName}</p>
            </div>
          </div>
          <div className="info-end">
            <div className="img-wrapper">
              <img src="/tfl-logo2.png" alt="logo" className="tfl-logo"></img>
            </div>
            <div className="text-wrapper">
              <h3>End of Line</h3>
              <p>{lineInfo.routeSections[0].destinationName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Journey;
