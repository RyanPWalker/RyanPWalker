import React, { useEffect, useState } from 'react';
import Granim from 'granim';

// import Logo from './logo.js';
import './less/App.less';
import './less/FlipSwitch.less';

// Components
import ParticledTitle from './components/ParticledTitle';
import Skills from './components/Skills';
import About from './components/About';

// Assets
import Home from './assets/SVG/home';
import Brackets from './assets/SVG/brackets';
import Smile from './assets/SVG/smile';

export default () => {
    const [active, setActive] = useState(1);
    const [granimInstance, setGranimInstance] = useState(1);

    useEffect(() => {
        const css = 'text-shadow: -1px -1px #ff6000, 1px 1px orange, 3px 2px yellow, 5px 3px yellowgreen, 7px 4px green, 9px 5px turquoise, 11px 6px #34b2ff; 13px 7px #9c40e0; font-size: 60px; color: rgb(203, 23, 47);';
        console.log('%c Hello World ', css);
        console.log("%cProudly made with React 16.11", 'color: #08BDBD');
        /*
         ______     __  __     ______     __   __     ______
        /\  == \   /\ \_\ \   /\  __ \   /\ "-.\ \   /\  __ \
        \ \  __<   \ \____ \  \ \  __ \  \ \ \-.  \  \ \ \/\ \
         \ \_\ \_\  \/\_____\  \ \_\ \_\  \ \_\\"\_\  \ \_____\
          \/_/ /_/   \/_____/   \/_/\/_/   \/_/ \/_/   \/_____/
        */

        const newGranimInstance = new Granim({
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
        setGranimInstance(newGranimInstance);
    }, []);

    const renderComponent = () => {
        switch(active) {
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

    return (
        <div className="App">
            {renderComponent()}
            <canvas id="canvas-interactive"></canvas>
            <div className="flip-switch-container">
                <button
                    className={`btn-one ${active === 1 ? 'active' : ''}`}
                    onClick={() => {
                        granimInstance.changeState('default-state');
                        setActive(1);
                    }}
                >
                    <Home />
                </button>
                <button
                    className={`btn-two ${active === 2 ? 'active' : ''}`}
                    onClick={() => {
                        granimInstance.changeState('green-state');
                        setActive(2);
                    }}
                >
                    <Brackets />
                </button>
                <button
                    className={`btn-three ${active === 3 ? 'active' : ''}`}
                    onClick={() => {
                        granimInstance.changeState('orange-state');
                        setActive(3);
                    }}
                >
                    <Smile />
                </button>
            </div>
        </div>
    );
}
