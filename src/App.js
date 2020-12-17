import React from 'react';
import {Route} from 'react-router-dom';
import Styled from "styled-components";

const Header = Styled.h1`
  width: 100%;
  margin: 4% auto;
`

const TopWindows = Styled.div`
  width: 70%;
  margin: 0% auto;
  display: flex;
  flex-wrap: wrap;
`

const BottomWindows = Styled.div`
  width: 70%;
  margin: 0% auto;
  display: flex;
  flex-wrap: wrap;
`

const Window = Styled.div`
  margin: 1% auto;
`


function App() {
  return (
    <div className="App">

      <Header className="header">Jana Kelsay</Header>
      
      <TopWindows>
        <Window>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.np2BFmZCfeu1IxZnI1ogjQHaE8%26pid%3DApi&f=1" />
        </Window>
        <Window>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.np2BFmZCfeu1IxZnI1ogjQHaE8%26pid%3DApi&f=1" />
        </Window>
      </TopWindows>

      <BottomWindows>
        <Window>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.np2BFmZCfeu1IxZnI1ogjQHaE8%26pid%3DApi&f=1" />
        </Window>
        <Window>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.np2BFmZCfeu1IxZnI1ogjQHaE8%26pid%3DApi&f=1" />
        </Window>
      </BottomWindows>
    </div>
  );
}

export default App;
