import React from "react";
import CoolPlaces from "../assets/coolplaces.png";
import EmployeeDirectory from "../assets/employeedirectory.png";
import CovidCorner from "../assets/CovidCorner.png";
import BudgetTracker from "../assets/budgettracker.png";
import Shoppies from "../assets/ShoppiesScreenshot.png";

const styles = {
    titleStyle: {
        textAlign: "left",
        marginBottom: "30px",
        color: "#F5F5F5"

    },
    cardStyle: {
        marginBottom: "60px",
        backgroundColor: "#F5F5F5",
        marginRight: "20px",
        textAlign: "left",
    },
    imgStyle: {
        height: "225px",

    }

}

function Projects() {
    return (
        <section id="projects" style={{ backgroundColor: "#1D3557" }}>
            <div className="row title-row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8 mb-10 pt-4" style={styles.titleStyle}>
                    <h2>Work</h2>
                    <hr style={{ borderColor: "#F5F5F5" }} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={Shoppies} alt="Card image cap" style={styles.imgStyle}></img>
                    <div className="card-body">
                        <h5 className="card-title">The Shoppies<span style={{ float: "right" }}>
                            <a href="https://github.com/jwhityoung/TheShoppies" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                            <a href="https://shoppies-nominations.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                        <p className="card-text">React Movie Nominations</p>

                    </div>

                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={CovidCorner} alt="Card image cap" style={styles.imgStyle}></img>
                    <div className="card-body">
                        <h5 className="card-title">CovidCorner<span style={{ float: "right" }}>
                            <a href="https://github.com/Jaesenix/CovidCorner" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                            <a href="http://covidcorner.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                        <p className="card-text">Full-Stack Application for Covid-19 Awareness</p>

                    </div>

                </div>
                
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={EmployeeDirectory} alt="Card image cap" ></img>
                    <div className="card-body">
                        <h5 className="card-title">Employee Directory<span style={{ float: "right" }}>
                            <a href="https://github.com/jwhityoung/Employee-Directory" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                            <a href=" https://frozen-thicket-63792.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                        <p className="card-text">React Application</p>

                    </div>

                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={CoolPlaces} alt="Card image cap" style={styles.imgStyle}></img>
                    <div className="card-body">
                        <h5 className="card-title">CoolPlaces<span style={{ float: "right" }}>
                            <a href="https://github.com/nmichel123/Project2" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                            <a href="https://floating-beach-29144.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                        <p className="card-text">Full-Stack Review Platform</p>

                    </div>
                </div>
               
          </div>
        </section >
    );
}

export default Projects;