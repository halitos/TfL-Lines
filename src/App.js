import React, { useState } from "react";
import "./App.css";
import Header from "./Componenets/Header";
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
      <SelectLine mode={mode} handleSelectedLine={handleSelectedLine} />
      <p>
        {mode} {line}
      </p>
    </div>
  );
}

export default App;
