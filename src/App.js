import React from 'react';
import logo from './logo.svg';
import Card from './components/molecules/Card';
import './App.css';

const Attributes = [
  {
    attribute: "population"
  },
  {
    attribute: "climate"
  },
  {
    attribute: "terrain"
  },
]

function App() {
  return (
    <div className="App-container" >
      <Card planetAttributes={Attributes} >

      </Card>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
