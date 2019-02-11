import React, { Component } from 'react';
import anime from 'animejs';
import Logo from './logo.js';
import './App.less';

class App extends Component {
  componentDidMount() {
    this.animate();
    setInterval(this.animate, 5000);
  }

  animate = () => {
    anime({
      targets: '.staggering-grid-demo .el',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [25, 20], from: 'center'})
    });
  }

  renderGrid = () => {
    const squares = 500;

    return Array(squares).fill(<div className="small-square el"></div>)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo className="App-logo" />
        </header>
        <div className="staggering-grid-demo">
          <div className="grid">
            {this.renderGrid()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
