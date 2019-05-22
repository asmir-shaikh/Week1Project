import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall';
import Map from './Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants in Charlottesville</h1>
        <Apicall/>
        <Map/>
      </header>
    </div>
  );
}

export default App;
