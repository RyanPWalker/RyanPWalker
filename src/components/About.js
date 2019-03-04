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
                    <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53063689_10213847227635138_4767014043263172608_o.jpg?_nc_cat=111&_nc_ht=scontent-sjc3-1.xx&oh=ecb578125548cf0248adb87bf97c5f46&oe=5CDB97A2" alt="Me, my wife, and my dog Cody." />
                </div>
            </Fragment>
        );
    }
}

export default About;
