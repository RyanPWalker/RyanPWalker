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
                            <img className="floating img1" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53628866_10213847274316305_2282122961399840768_n.jpg?_nc_cat=103&_nc_oc=AQlfFLNJ2MxvHOv8BT0OV3S-2sSH3epelHcfW8pi5vRoyZHhHs8tpgEIw-rUMet7DSc&_nc_ht=scontent-lax3-1.xx&oh=c6a3bb62cd9d166b05cc83b406826abd&oe=5D7E2F84" alt="Me" />
                            <h3>Me</h3>
                        </div>
                        <div className="">
                            <img className="floating img2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53405452_10213847271236228_5137334558840061952_n.jpg?_nc_cat=101&_nc_oc=AQkipQBEV4Dt64WzLivC11ZkwzjQSzCLXjN-JziRxOrsn-fFCMc62QDYmgJLykgtBPE&_nc_ht=scontent-lax3-1.xx&oh=1962ab9886771194708638d372f569ca&oe=5DBF9583" alt="My Wife Maddy" />
                            <h3>Maddy</h3>
                        </div>
                        <div className="">
                            <img className="floating img3" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53340268_10213847271436233_2375220135637024768_n.jpg?_nc_cat=108&_nc_oc=AQmb5ZYYImI97l11BXiaLMrMjWWOGDeZHu019_gLZWey9izedQYJ9fjiZPyqhtLJjqc&_nc_ht=scontent-lax3-1.xx&oh=b058d0d6c1692aaf1aba67b035fc4553&oe=5DAA5687" alt="My crazy dog Cody" />
                            <h3>Cody</h3>
                        </div>
                        <div className="">
                            <img className="floating img4" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53155834_10213847276156351_855772710469369856_n.jpg?_nc_cat=105&_nc_oc=AQkx8OjnXiBAGVslQXJzb4WUupAbw08MDEYdl9_Mf3GnruP3vsx5b9mHu_faT7QZcI4&_nc_ht=scontent-lax3-1.xx&oh=9d86aa8b2c1ede8e0525d112f9e3d8ed&oe=5DC38AD0" alt="My cuddly dog Willow" />
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
