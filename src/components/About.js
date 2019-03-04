import React, { Component, Fragment } from 'react';
import '../less/About.less';

// SVG
import Github from '../assets/images/social/github';
import FB from '../assets/images/social/fb';
import Email from '../assets/images/social/email';

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
                    </div>
                    <img src="../assets/images/family.jpg" />
                </div>
            </Fragment>
        );
    }
}

export default About;
