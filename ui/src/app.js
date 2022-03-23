import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76.4%;
`

const Quote = styled.blockquote`
  border: 0.05em solid rgba(0,0,0,0.2);
  border-radius: 1em;
  padding: 2em 2em 2.9em 2em;
  text-align: center;
  vertical-align: middle;
  font-size: 3vw;
`

const App = () => {
  return (
    <Container>
      <Quote>The Shoemaker's son<br />always goes barefoot</Quote>
    </Container>
  );
}

render(<App />, document.getElementById('app'));