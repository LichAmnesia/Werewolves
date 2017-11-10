import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myData from 'json-loader!./data.json';


const json = require('./data.json');

// fetch('http://localhost:3000/data.json')
//   .then(res => res.json())
//   .then(data => console.log(data))

class App extends Component {
  // console.log(myData);
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, sssssssedit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
