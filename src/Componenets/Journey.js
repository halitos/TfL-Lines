import React, { useState, useEffect } from "react";

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
      <div>
        <h2>
          {lineInfo.modeName}: {lineInfo.name}
        </h2>
        <div>
          <div>
            <h3>Start of Line</h3>
            <div>{lineInfo.routeSections[0].originationName}</div>
          </div>
          <div>
            <h3>End of Line</h3>
            <div>{lineInfo.routeSections[0].destinationName}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Journey;
