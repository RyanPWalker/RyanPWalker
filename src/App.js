import React, { Component } from 'react';
// import Logo from './logo.js';
import './less/App.less';
import ParticledTitle from './components/ParticledTitle';
import FlipSwitch from './components/FlipSwitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ParticledTitle />
        <FlipSwitch />
      </div>
    );
  }
}

export default App;
