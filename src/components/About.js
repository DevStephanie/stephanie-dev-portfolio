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

    const two = (
      <p> 
      </p>
 
    )


    const tech_stack = [
      
      "Python",
      "SQL",
      "Java",
      "C#",
    ];
    const softwares =[
      "Figma", "Android Studio", "VR", "Meta Horizon OS", "Unity", "Blender", "Photoshop", "Canva", "Rive", "Bezi",
    ]

    const product_skills = [
      "UI/UX",
      "Product strategy",
      "Market Research", 
      "User Experience", 
      "Roadmapping",
      "Product development",
    ]

    const socials = [
      "MetaQ:serene.city",
      "Spatial:serene.city",
    ]

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              <b>{"Favorite languages:"}</b>
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <b>{"Favorite Softwares"}</b>
              <ul className="tech-stack">
                {softwares.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <b>{"Product Skills:"}</b>
              <ul className="tech-stack">
                {product_skills.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}

              <b> Follow my Socials:</b>
              {[two]}
              {socials.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <div className="about-description_2">

            </div>
            <div className="about-image">
              <img alt="profile" src={"/profile-pic.png"} />
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
