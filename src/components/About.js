import React, { Fragment } from "react";
import "../less/About.less";

// SVG
import Github from "../assets/images/social/github";
import Email from "../assets/images/social/email";
import LinkedIn from "../assets/images/social/linkedin";

export default () => (
  <Fragment>
    <h2 className="about-title">About</h2>
    <div className="about-container">
      <div className="icons">
        <a
          href="https://github.com/RyanPWalker"
          target="blank"
          title="My Github"
        >
          <Github />
        </a>
        <a
          href="mailto:ryanprestonwalker@gmail.com"
          target="blank"
          title="Email me"
        >
          <Email />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-preston-walker/"
          target="blank"
          title="My LinkedIn"
        >
          <LinkedIn />
        </a>
      </div>
      <div className="bubbles">
        <div>
          <img
            className="floating img1"
            src="https://raw.githubusercontent.com/RyanPWalker/RyanPWalker/master/src/assets/images/Handsome.jpg"
            alt="Me"
          />
          <h3>Me</h3>
        </div>
        <div>
          <img
            className="floating img2"
            src="https://raw.githubusercontent.com/RyanPWalker/RyanPWalker/master/src/assets/images/Maddy.jpg"
            alt="My Wife Maddy"
          />
          <h3>Maddy</h3>
        </div>
        <div>
          <img
            className="floating img3"
            src="https://raw.githubusercontent.com/RyanPWalker/RyanPWalker/master/src/assets/images/cody.jpg"
            alt="My crazy dog Cody"
          />
          <h3>Cody</h3>
        </div>
        <div>
          <img
            className="floating img4"
            src="https://raw.githubusercontent.com/RyanPWalker/RyanPWalker/master/src/assets/images/willow.jpg"
            alt="My cuddly dog Willow"
          />
          <h3>Willow</h3>
        </div>
      </div>
      <p>
        Thanks for checking out my site! I've been a developer for 10 years now
        and still love it. I'm currently working at Domo as a Technical Lead,
        Senior Software Developer in American Fork, Utah. I mostly work with
        React.js, Redux, TypeScript, CSS Modules, Next.js, and Node.js on a
        daily basis. In my free time I like to play with my kids, game, make
        music, and operate my side business{" "}
        <a
          href="https://www.rhynosaxeandarchery.com/"
          target="blank"
          className="rainbow-link"
        >
          Rhyno's Axe Throwing and Archery
        </a>
        . Please reach out and{" "}
        <a
          href="mailto:ryanprestonwalker@gmail.com"
          target="blank"
          title="Email me"
        >
          connect
        </a>
        !
      </p>
    </div>
  </Fragment>
);
