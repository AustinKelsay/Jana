import React from 'react';
import {Route} from 'react-router-dom';
import Landing from "./components/Landing";
import Styled from "styled-components";


function App() {
  return (
    <div className="App">
      <Route path="/" component={Landing} />
    </div>
  );
}

export default App;
