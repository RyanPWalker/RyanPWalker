import React, { Component } from 'react';
import Granim from 'granim';

// import Logo from './logo.js';
import './less/App.less';
import './less/FlipSwitch.less';

import ParticledTitle from './components/ParticledTitle';
import Skills from './components/Skills';
import About from './components/About';

import Home from './assets/SVG/home';
import Brackets from './assets/SVG/brackets';
import Smile from './assets/SVG/smile';

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
                    transitionSpeed: 6000
                },
                "orange-state": {
                    gradients: [
                        ['#FF9000', '#F9D423'],
                        ['#F2BB05', '#f8b500'],
                        ['#FFAE00', '#ff6a00']
                    ],
                    transitionSpeed: 6000
                },
                "green-state": {
                    gradients: [
                        ['#093028', '#237A57'],
                        ['#43C6AC', '#F8FFAE'],
                        ['#DCE35B', '#45B649']
                    ],
                    transitionSpeed: 10000
                }
            }
        });
        this.setState({ granimInstance });
    }
    renderComponent = () => {
        switch(this.state.active) {
            case 1: {
                return <ParticledTitle />;
            }
            case 2: {
                return <Skills />;
            }
            case 3: {
                return <About />;
            }
        }
    }
    render() {
        return (
            <div className="App">
                {this.renderComponent()}
                <canvas id="canvas-interactive"></canvas>
                <div className="flip-switch-container">
                    <button
                        className={`btn-one ${this.state.active === 1 ? 'active' : ''}`}
                        onClick={() => {
                            this.state.granimInstance.changeState('default-state');
                            this.setState({ active: 1 });
                        }}
                    >
                        <Home />
                    </button>
                    <button
                        className={`btn-two ${this.state.active === 2 ? 'active' : ''}`}
                        onClick={() => {
                            this.state.granimInstance.changeState('green-state');
                            this.setState({ active: 2 });
                        }}
                    >
                        <Brackets />
                    </button>
                    <button
                        className={`btn-three ${this.state.active === 3 ? 'active' : ''}`}
                        onClick={() => {
                            this.state.granimInstance.changeState('orange-state');
                            this.setState({ active: 3 });
                        }}
                    >
                        <Smile />
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
