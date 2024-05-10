import React from "react";
import "../styles/Footer.css";
import FadeInSection from "./FadeInSection";

class Footer extends React.Component {
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
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div> Designed by DevStephanie </div>
            <div> All rights reserved. © 2024 </div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Footer;