import React, { Component } from 'react';
import Granim from 'granim';
// import Logo from './logo.js';
import './less/App.less';
import './less/FlipSwitch.less';
import ParticledTitle from './components/ParticledTitle';
// import FlipSwitch from './components/FlipSwitch';

class App extends Component {
    constructor() {
        super();
        this.state = { active: 1, granimInstance: {} }
    }
  componentDidMount() {
    const granimInstance = new Granim({
      element: '#canvas-interactive',
      name: 'interactive-gradient',
      elToSetClassOn: '.App',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states : {
          "default-state": {
              gradients: [
                  ['#185a9d', '#12FFF7'],
                  ['#0066ff', '#7B920A'],
                  ['#1A2980', '#26D0CE']
              ],
              transitionSpeed: 5000
          },
          "violet-state": {
              gradients: [
                ['#FF4E50', '#F9D423'],
                ['#e96443', '#f8b500'],
                ['#ee0979', '#ff6a00']
              ],
              transitionSpeed: 3000
          },
          "orange-state": {
              gradients: [
                ['#093028', '#237A57'],
                ['#43C6AC', '#F8FFAE'],
                ['#DCE35B', '#45B649']
            ],
            transitionSpeed: 3000
          }
      }
    });
    console.log('typeof', granimInstance);
    this.setState({ granimInstance });
  }
  render() {
    return (
      <div className="App">
        <ParticledTitle />
        <canvas id="canvas-interactive"></canvas>
        <div className="flip-switch-container">
            <button
                className={`btn-one ${this.state.active === 1 ? 'active' : ''}`}
                onClick={() => {
                    this.state.granimInstance.changeState('default-state');
                    this.setState({ active: 1 });
                }}
            >
                1
            </button>
            <button
                className={`btn-two ${this.state.active === 2 ? 'active' : ''}`}
                onClick={() => {
                    this.state.granimInstance.changeState('violet-state');
                    this.setState({ active: 2 });
                }}
            >
                2
            </button>
            <button
                className={`btn-three ${this.state.active === 3 ? 'active' : ''}`}
                onClick={() => {
                    this.state.granimInstance.changeState('orange-state');
                    this.setState({ active: 3 });
                }}
            >
                3
            </button>
        </div>
      </div>
    );
  }
}

export default App;
