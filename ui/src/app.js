import React from 'react';
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Mikael Grön</h1>
      <p>Jobbar på ny sajt här</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));