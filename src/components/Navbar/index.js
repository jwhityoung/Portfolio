import React from "react";
import Logo from "../../assets/jwy.png";

const styles = {
  navbarStyle: {
    paddingBottom: "65px",
    backgroundColor: "#F5F5F5",
    marginTop: "0px",
    paddingTop: "0px"
  }, 
  logo: {
    width: "200px",
    marginTop: "10px"
  }
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ml-auto" style={styles.navbarStyle}>
      <a className="navbar-brand" href="#app">
        <img src={Logo} style={styles.logo}></img>
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;