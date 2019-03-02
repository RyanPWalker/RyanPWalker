import React, { Component } from 'react';
import '../less/Skills.less';

// SVG
import Webpack from '../assets/images/webpack';
import Babel from '../assets/images/babel';
import Cplusplus from '../assets/images/cplusplus';
import Triforce from '../assets/images/triforce';
import Redux from '../assets/images/redux';
import Expo from '../assets/images/expo';

class Skills extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="skills-container">
                <h2>Sweet Skills</h2>
                <div>
                    <i id="skills" className="devicon-react-original-wordmark colored "></i>
                    <Redux />
                    <Webpack />
                    <Babel />
                </div>
                <div>
                    <i id="skills" className="devicon-javascript-plain colored "></i>
                    <i id="skills" className="devicon-html5-plain-wordmark colored "></i>
                    <i id="skills" className="devicon-css3-plain-wordmark colored "></i>
                    <i id="skills" className="devicon-less-plain-wordmark colored"></i>
                </div>
                <div>
                    <i id="skills" className="devicon-nodejs-plain colored"></i>
                    <i id="skills" className="devicon-webpack-plain colored"></i>
                    <i id="skills" className="devicon-git-plain-wordmark colored "></i>
                    <Triforce />
                </div>
                <div>
                    <Expo />
                    <i id="skills" className="devicon-illustrator-plain colored"></i>
                    <i id="skills" className="devicon-wordpress-plain"></i>
                    <i id="skills" className="devicon-cplusplus-line-wordmark colored"></i>
                </div>
            </div>
        );
    }
}

export default Skills;
