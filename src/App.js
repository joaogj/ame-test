import React from 'react';
import './App.css';
import Page from './components/template/Page/Page';
import Attributes from './data/data.js';

function App() {
  return (
      <Page planetAttributes={Attributes} />
  );
}

export default App;
