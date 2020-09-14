import React, { useState, useEffect } from "react";

const Journey = ({ line }) => {
  const [lineInfo, setLineInfo] = useState();

  useEffect(() => {
    if (!line) return;
    fetch(`https://api.tfl.gov.uk/Line/${line}/Route`)
      .then((res) => res.json())
      .then((data) => setLineInfo(data));
  }, [line]);

  if (lineInfo) {
    return (
      <div>
        <h2 className="text-sm mb-4 font-bold uppercase">
          {lineInfo.modeName}: {lineInfo.name}
        </h2>
        <div className="w-full flex justify-between">
          <div className="flex flex-col bg-blue-700 rounded-md h-32 shadow-lg border-gray-400 flex-1 mr-3">
            <h3 className="uppercase text-xs font-bold px-1 pt-1 text-white">
              Start of Line
            </h3>
            <div className="h-full flex items-center justify-center px-3 text-center text-white">
              {lineInfo.routeSections[0].originationName}
            </div>
          </div>
          {/* <div className="flex justify-center w-6">
            <Arrow className="w-full" />
          </div> */}
          <div className="flex flex-col bg-blue-700 rounded-md h-32 shadow-lg border-gray-400 flex-1 ml-3">
            <h3 className="uppercase text-xs font-bold px-1 pt-1 text-white">
              End of Line
            </h3>
            <div className="h-full flex items-center justify-center px-3 text-center text-white">
              {lineInfo.routeSections[0].destinationName}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return "";
};

export default Journey;
