import React from "react";
import BarMaid from "../assets/barmaid.png";
import CoolPlaces from "../assets/coolplaces.png";
import EmployeeDirectory from "../assets/employeedirectory.png";
import NoteTaker from "../assets/notetaker.png";
import BudgetTracker from "../assets/budgettracker.png";
import EmployeeMgmt from "../assets/employeemgmt.png";

const styles = {
    titleStyle: {
        textAlign: "left",
        marginBottom: "30px",
        color: "#F1FAEE"

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
        <section style={{ backgroundColor: "#1D3557" }}>
            <div className="row title-row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8 mb-10 pt-4" style={styles.titleStyle}>
                    <h2>Projects</h2>
                    <hr style={{borderColor: "#F1FAEE"}} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={BarMaid} alt="Card image cap" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">BarMaid<span style={{float: "right"}}>
                            <a href="https://github.com/Kennyward85/Project1-" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href="https://kennyward85.github.io/Project1-/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">Cocktail Recipe Search App</p>
                        </div>

                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={CoolPlaces} alt="Card image cap" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">CoolPlaces<span style={{float: "right"}}>
                            <a href="https://github.com/nmichel123/Project2" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href="https://floating-beach-29144.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">Full-Stack Review Platform</p>
                           
                        </div>

                </div>
                <div className="row">
                <div className="col-md-2">
                </div>
                <div className="card col-md-4 border-0"  style={styles.cardStyle}>
                    <img className="card-img-top" src={EmployeeDirectory} alt="Card image cap" ></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory<span style={{float: "right"}}>
                            <a href="https://github.com/jwhityoung/Employee-Directory" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href=" https://frozen-thicket-63792.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">React Application</p>
                     
                        </div>

                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={NoteTaker} alt="Card image cap" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker<span style={{float: "right"}}>
                            <a href="https://github.com/jwhityoung/Note-Taker" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href="https://all-the-notes.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">Express Backend App</p>
                 
                        </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={BudgetTracker} alt="Card image cap" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">Budget Tracker<span style={{float: "right"}}>
                            <a href=" https://github.com/jwhityoung/BudgetTracker" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href="https://track-that-money.herokuapp.com/" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">Progressive Web App</p>
                        
                        </div>

                </div>
                <div className="card col-md-4 border-0" style={styles.cardStyle}>
                    <img className="card-img-top" src={EmployeeMgmt} alt="Card image cap" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Management System<span style={{float: "right"}}>
                            <a href="https://github.com/jwhityoung/Employee-Management-System" className="btn"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                            <a href="https://drive.google.com/file/d/1H1cb5sc8B8DBpUD27gvBG5K7Ck9Ru7u3/view" className="btn"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></a></span></h5>
                            <p className="card-text">Node, Inquirer and MySQl Management System</p>

                        </div>

                </div>
            </div>
            </div>
        </section>
    );
}

export default Projects;