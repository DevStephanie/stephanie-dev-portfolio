import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="banner">
          <img alt="banner" src={"/banner.png"} />
        </div>
        <Typist avgTypingDelay={120}>
          <br></br>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"DevStephanie"}</span>
            {" here."}
            <br></br>
          </span>
        </Typist>
        <FadeInSection>
          <br></br>
          <div className="intro-subtitle"><h2>I make <i> pretty</i> things</h2> </div>
          <div className="intro-desc">
          <p> Hey, I’m Stephanie!</p>
          <p2> May of 2024, I completed a Software Engineering Apprenticeship at <b> GOOGLE!</b> </p2>
          <br></br>
         In Fall 2024, I plan to pursue an MS in Human Computer Interaction. With strong interests in designing and building mobile apps, game design, 
         & VR/AR technologies, I plan to add a creative flare to all my passion projects. <br></br>
        Happy you found my little slice of the internet, <b>ENJOY</b>!
          </div>
          <a href="mailto:stephabdullah@gmail.com" className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
