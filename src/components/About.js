import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const one = (
      <p>
        <a href="https://illinois.edu/about/index.html"> @ The University of Illinois at Urbana Champaign, </a>
        I received a Bachelor of Science in Liberal Arts & Sciences in  Geography & Geographic Information Science.
      <br></br>
      May of 2024, I completed a software engineering apprenticeship <a href="https://about.google/"> @ Google </a> 
       where I learned so many valuable skills and my time there left an indelible influence on my career and pursuit of higher education.
        <br></br> 
       <br></br> My current hobbies include architectural photography, photoshop, making animations, digital doodles, content creation & technical writing. 
      </p>
    );
    <br></br>

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div> {[one]}</div>
        </FadeInSection>
      </div>
    );
  }
     
    
    
}

export default About;