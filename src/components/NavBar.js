import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
// import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="navbar-new">
        <Container>
          <Navbar.Brand href="#">DevStephanie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro"> HOME </Nav.Link>
              <Nav.Link href="#about"> ABOUT </Nav.Link>
              <Nav.Link href="#experience"> EXP </Nav.Link>
              <Nav.Link href="#projects"> PROJ </Nav.Link>
              <Nav.Link href="#artdump"> ART </Nav.Link>

            </Nav>
            <Nav className="ml-auto">
              {/* <Nav.Link href="mailto:stephabdullah@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link> */}
              <Nav.Link href="https://github.com/DevStephanie" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 20 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/devstephanie/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
              </Nav.Link>
              <Nav.Link href="https://medium.com/" target="_blank" rel="noopener noreferrer">
                <BorderColorIcon style={{ fontSize: 20 }}></BorderColorIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;