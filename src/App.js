import React, { useState } from "react";
import "./App.css";
import Header from "./Componenets/Header";
import Journey from "./Componenets/Journey";
import SelectLine from "./Componenets/SelectLine";
import SelectTransport from "./Componenets/SelectTransport";

function App() {
  const [mode, setMode] = useState();
  const [line, setLine] = useState();

  function handleSelectedLine(selectedLine) {
    setLine(selectedLine);
  }

  function handleSelectedMode(selectedMode) {
    setMode(selectedMode);
  }

  return (
    <div className="App">
      <Header />
      <SelectTransport handleSelectedMode={handleSelectedMode} />
      {/* <p>Selected Mode: {mode}</p> */}
      <SelectLine mode={mode} handleSelectedLine={handleSelectedLine} />
      {/* <p>Selected Line: {line}</p> */}
      <Journey line={line} />
    </div>
  );
}

export default App;
