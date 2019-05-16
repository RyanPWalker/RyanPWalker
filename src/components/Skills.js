import React, { Component, Fragment } from 'react';
import '../less/Skills.less';

// SVG
import Webpack from '../assets/images/webpack';
import Babel from '../assets/images/babel';
import Jquery from '../assets/images/jquery';
import Triforce from '../assets/images/triforce';
import Redux from '../assets/images/redux';
import Expo from '../assets/images/expo';
import Jest from '../assets/images/jest';

class Skills extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <h2 className="skills-title">Sweet Skills</h2>
                <div className="skills-container">
                    <div>
                        <a href="https://reactjs.org/" target="blank">
                            <i id="skills" title="React" className="devicon-react-original-wordmark colored "></i>
                        </a>
                        <a href="https://redux.js.org/" target="blank" title="Redux">
                            <Redux />
                        </a>
                        <a href="https://webpack.js.org/" target="blank" title="Webpack">
                            <Webpack />
                        </a>
                        <a href="https://babeljs.io/" target="blank" title="Babel">
                            <Babel />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.w3schools.com/js/" target="blank">
                            <i id="skills" title="JavaScript" className="devicon-javascript-plain colored "></i>
                        </a>
                        <a href="https://www.w3schools.com/html/html_intro.asp" target="blank">
                            <i id="skills" title="Html5" className="devicon-html5-plain-wordmark colored "></i>
                        </a>
                        <a href="https://www.w3schools.com/css/" target="blank">
                            <i id="skills" title="Css3" className="devicon-css3-plain-wordmark colored "></i>
                        </a>
                        <a href="http://lesscss.org/" target="blank">
                            <i id="skills" title="Less" className="devicon-less-plain-wordmark colored"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://nodejs.org" target="blank">
                            <i id="skills" title="NodeJS" className="devicon-nodejs-plain colored"></i>
                        </a>
                        <a href="https://git-scm.com/" target="blank">
                            <i id="skills" title="Git" className="devicon-git-plain-wordmark colored "></i>
                        </a>
                        <a href="https://jquery.com/" target="blank" title="Jquery">
                            <Jquery />
                        </a>
                        <a href="https://wordpress.com" target="blank">
                            <i id="skills" title="Wordpress/Web Builders" className="devicon-wordpress-plain"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.adobe.com/products/illustrator.html" target="blank">
                            <i id="skills" title="Adobe Illustrator" className="devicon-illustrator-plain colored"></i>
                        </a>
                        <a href="https://expo.io" target="blank" title="Expo">
                            <Expo />
                        </a>
                        <a href="https://jestjs.io/" target="blank" title="Jest">
                            <Jest />
                        </a>
                        <a href="https://www.zelda.com/about/" target="blank" title="The Legend of Zelda">
                            <Triforce />
                        </a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Skills;
