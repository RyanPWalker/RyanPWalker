import React, { Component, Fragment } from 'react';
import '../less/About.less';

// SVG
import Github from '../assets/images/social/github';
import FB from '../assets/images/social/fb';
import Email from '../assets/images/social/email';
import LinkedIn from '../assets/images/social/linkedin';

class About extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <h2 className="about-title">About</h2>
                <div className="about-container">
                    <div className="icons">
                        <a href="https://github.com/RyanPWalker" target="blank" title="My Github">
                            <Github />
                        </a>
                        <a href="mailto:ryanprestonwalker@gmail.com" target="blank" title="Email me">
                            <Email />
                        </a>
                        <a href="https://www.facebook.com/dyin.to.be.ryan" target="blank" title="My Facebook">
                            <FB />
                        </a>
                        <a href="https://www.linkedin.com/in/ryan-preston-walker/" target="blank" title="My LinkedIn">
                            <LinkedIn />
                        </a>
                    </div>
                    <div className="bubbles">
                        <div>
                            <img className="floating img1" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53628866_10213847274316305_2282122961399840768_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=550ebe5f64b4037e52886d83ca18465b&oe=5CDFFB84" alt="Me" />
                            <h3>Me</h3>
                        </div>
                        <div className="">
                            <img className="floating img2" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52953592_10213847271196227_1904766005196881920_o.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=de3800963e8ae8c98318564bc6d60a00&oe=5D105C99" alt="My Wife Maddy" />
                            <h3>Maddy</h3>
                        </div>
                        <div className="">
                            <img className="floating img3" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53495588_10213847271396232_8225031756760219648_o.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=0481eb62d95bfdb7a7f931e74aa1c0ca&oe=5D1D03A2" alt="My crazy dog Cody" />
                            <h3>Cody</h3>
                        </div>
                        <div className="">
                            <img className="floating img4" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53514134_10213847276196352_944188902929858560_o.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=0510f47feee65f5b0ba4be42a143a345&oe=5D26D60B" alt="My cuddly dog Willow" />
                            <h3>Willow</h3>
                        </div>
                    </div>
                    <p>
                        Thanks for checking out my site! I've been a developer for almost 4 years now and still love it.{' '}
                        I'm currently working at Overstock.com as a Front End Developer II in Midvale, Utah.{' '}
                        I mostly work with React, Redux, Less, Webpack, and Nodejs on a daily basis.{' '}
                        In my free time I like to game, make music, and operate my side business{' '}
                        <a href="https://www.superiormarketingdesign.com" target="blank">Make Me Superior</a>.
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default About;
