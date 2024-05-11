import React from "react";
import "../styles/Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";

class ArtDump extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "PHOTO1": {
        // title: "Pick",
        // desc:
        //   "Early stage start-up style project aimed at improving driver experience within the ride share environment.",
        // techStack: "Java, Swift UI, Objective -C",
        // // link: "",
        // // open: "",
        image: "/under-constrct.png"
      },
      "PHOTO2": {
        // title: "Relevance",
        // desc:
        //   "Early stage start-up passion project aimed at creating a more inclusive social space within the gaming industry.",
        // techStack: "Java, Swift UI, Objective -C",
        // // link: "",
        // // open: "",
        image: "/under-constrct.png"
      },
      "PHOTO3": {
        // title: "Relevance",
        // desc:
        //   "Early stage start-up passion project aimed at creating a more inclusive social space within the gaming industry.",
        // techStack: "Java, Swift UI, Objective -C",
        // // link: "",
        // // open: "",
        image: "/under-constrct.png"
      },
      "PHOTO4": {
        // title: "Relevance",
        // desc:
        //   "Early stage start-up passion project aimed at creating a more inclusive social space within the gaming industry.",
        // techStack: "Java, Swift UI, Objective -C",
        // // link: "",
        // // open: "",
        image: "/under-constrct.png"
      },

    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ art dump </span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ArtDump;