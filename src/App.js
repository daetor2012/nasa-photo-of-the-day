import React from "react";
import "./App.css";
import NasaInfo from "./NasaFunc";
import styled from 'styled-components';
const Decoration = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-top: 1%;
`;
const Wrapper = styled.div`
  margin-bottom: 2%;
`;
function CustomComponent() {
  return (
    <Wrapper>
      <Decoration>
        NASA API
      </Decoration>
    </Wrapper>
  );
};


function App() {
  return (
    <div className="App">
      <CustomComponent />
      <div>
        <NasaInfo />
      </div>
      <footer style={{color: "white", fontSize: "1.2rem"}}>David's React Project</footer>
    </div>
    
  );
}

export default App;
