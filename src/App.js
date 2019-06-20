import React from 'react';
import logo from './logo.svg';
import Card from './components/molecules/Card';
import './App.css';
import Button from './components/atoms/Button';
import Page from './components/template/Page';

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
      <Page planetAttributes={Attributes} />
  );
}

export default App;
