import React, { Component } from 'react';
import '../less/FlipSwitch.less';

class FlipSwitch extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="flip-switch-container">
                <button className="btn-one">1</button>
                <button className="btn-two">2</button>
                <button className="btn-three">3</button>
            </div>
        );
    }
}

export default FlipSwitch;
