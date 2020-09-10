import React from "react";
import CoolPlaces from "../assets/coolplaces.png";
import EmployeeDirectory from "../assets/employeedirectory.png";
import CovidCorner from "../assets/CovidCorner.png";
import Shoppies from "../assets/ShoppiesScreenshot.png";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';

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
        padding: '10px',
    },
    imgStyle: {
        height: "240px",
        width: '100%'

    }

}



class Work extends React.Component {
    state = {
        shown: true
    }
    toggle = () => this.setState({ shown: !this.state.shown })

    render() {
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
                        <img className="card-img-top" src={Shoppies} alt="The Shoppies" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">The Shoppies<span style={{ float: "right" }}>
                                <a href="https://github.com/jwhityoung/TheShoppies" className="btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href="https://shoppies-nominations.herokuapp.com/" className="btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                            <p className="card-text">React Movie Award Nominations</p>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ float: "right" }}>
                                  <ThreeDots color="black" size={25}/>
      </Accordion.Toggle>
                                <br></br>
                                <Accordion.Collapse eventKey="0">
                                    <ul className="project-deets">
                                        <li>Independent project that searches OMDB for movies and allows users to nominate up to five of their favorite movies.</li>
                                        <li>Utilized Create React App, React Bootstrap and Axios </li>
                                    </ul>
                                </Accordion.Collapse>
                            </Accordion>
                        </div>
                    </div>
                    <div className="card col-md-4 border-0" style={styles.cardStyle}>
                        <img className="card-img-top" src={CovidCorner} alt="CovidCorner" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">CovidCorner<span style={{ float: "right" }}>
                                <a href="https://github.com/Jaesenix/CovidCorner" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href="http://covidcorner.herokuapp.com/" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                            <p className="card-text">Full-Stack Application for Covid-19</p>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ float: "right" }}>
                                <ThreeDots color="black" size={25}/>
      </Accordion.Toggle>
                                <br></br>
                                <Accordion.Collapse eventKey="1">
                                    <ul className="project-deets">
                                        <li>Collaborated with a team of four to create a React application with a Node.js/Express backend and a mySQL database
</li>
                                        <li>Responsible for front-end, building 90% of components, handled routing and responsible for the design, style and layout. </li>
                                        <li>Utlizied Create React App, Material-UI, Sequelize, Axios, Express</li>
                                    </ul>
                                </Accordion.Collapse>
                            </Accordion>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-4 border-0" style={styles.cardStyle}>
                        <img className="card-img-top" src={EmployeeDirectory} alt="Employee Directory" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory<span style={{ float: "right" }}>
                                <a href="https://github.com/jwhityoung/Employee-Directory" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href=" https://frozen-thicket-63792.herokuapp.com/" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                            <p className="card-text">React Application</p>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ float: "right" }}>
                                <ThreeDots color="black" size={25}/>
      </Accordion.Toggle>
                                <br></br>
                                <Accordion.Collapse eventKey="2">
                                    <ul className="project-deets">
                                        <li>Independent project that allows users to view all employees, sort them by column or search for them by role
</li>
                                        <li>Utlizied Create React App, react-table</li>
                                    </ul>
                                </Accordion.Collapse>
                            </Accordion>
                        </div>
                    </div>
                    <div className="card col-md-4 border-0" style={styles.cardStyle}>
                        <img className="card-img-top" src={CoolPlaces} alt="CoolPlaces" style={styles.imgStyle}></img>
                        <div className="card-body">
                            <h5 className="card-title">CoolPlaces<span style={{ float: "right" }}>
                                <a href="https://github.com/nmichel123/Project2" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href="https://floating-beach-29144.herokuapp.com/" className="btn" target="_blank" rel="noopener noreferrer"><i class="fa fa-rocket fa-lg" aria-hidden="true" target="_blank" rel="noopener noreferrer"></i></a></span></h5>
                            <p className="card-text">Full-Stack Review Platform</p>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ float: "right" }}>
                                <ThreeDots color="black" size={25}/>
      </Accordion.Toggle>
                                <br></br>
                                <Accordion.Collapse eventKey="3">
                                    <ul className="project-deets">
                                        <li>Full-stack app to allow users to add, review and view cool places around the world.
</li>
                                        <li>Produced JQeuery, Axios and Bootstrap front end, API routes and Sequelize schemas.</li>
                                    </ul>
                                </Accordion.Collapse>
                            </Accordion>
                        </div>
                    </div>
                </div>


            </section >
        );
    }
}

export default Work;