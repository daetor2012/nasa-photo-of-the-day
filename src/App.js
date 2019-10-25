import React from "react";
import "./App.css";
import NasaInfo from "./NasaFunc";


function App() {
  return (
    <div className="App">
      <h1 style={{color: "white"}}>NASA API</h1>
      <div>
        <NasaInfo />
      </div>
      <footer style={{color: "white"}}>David's React Project</footer>
    </div>
    
  );
}

export default App;
