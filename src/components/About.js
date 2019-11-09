import React, { Fragment } from 'react';
import '../less/About.less';

// SVG
import Github from '../assets/images/social/github';
import FB from '../assets/images/social/fb';
import Email from '../assets/images/social/email';
import LinkedIn from '../assets/images/social/linkedin';

export default () => (
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
                    <img className="floating img1" src="https://github.com/RyanPWalker/RyanPWalker/blob/master/src/assets/images/Handsome.jpg" alt="Me" />
                    <h3>Me</h3>
                </div>
                <div className="">
                    <img className="floating img2" src="https://github.com/RyanPWalker/RyanPWalker/blob/master/src/assets/images/Maddy.jpg" alt="My Wife Maddy" />
                    <h3>Maddy</h3>
                </div>
                <div className="">
                    <img className="floating img3" src="https://github.com/RyanPWalker/RyanPWalker/blob/master/src/assets/images/cody.jpg" alt="My crazy dog Cody" />
                    <h3>Cody</h3>
                </div>
                <div className="">
                    <img className="floating img4" src="https://github.com/RyanPWalker/RyanPWalker/blob/master/src/assets/images/willow.jpg" alt="My cuddly dog Willow" />
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
