import React from "react";

const styles = {
    footerStyle: {
        backgroundColor: "#E44966",
        color: "#1D3557",
        fontSize: "small"
    }

}
function Footer () {
    return (
        <nav className="navbar navbarfooter" style={styles.footerStyle}>
        <a className="navbar-brand mx-auto" style={styles.footerStyle}>&copy; 2020 Copyright: Whitney Young</a>
      </nav>
    )
}

export default Footer;