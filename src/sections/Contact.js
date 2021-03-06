import React from "react";
import Resume from "../assets/resume.pdf";


const styles = {
    titleStyle: {
        textAlign: "left",
        color: "#F5F5F5"

    },
    cardStyle: {
        marginRight: "15px",
        marginBottom: "50px",
        backgroundColor: "#F5F5F5"
    }
}

function Contact() {
    return (
        
            <section id="contact" style={{ backgroundColor: "#1D3557" }}>
                <div className="row title-row" style={styles.titleStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 mb-10 pt-4" >
                        <h2>Contact Me</h2>
                        <hr style={{borderColor: "#F5F5F5"}}/>
                    </div>
                </div>
               
                <article className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                            <a href="https://www.linkedin.com/in/jwhityoung/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                            <a href="https://github.com/jwhityoung" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                        <a href = "mailto: jwhityoung@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body">
                            <a class="place mb-2" href={Resume} download="Whitney Young Resume"><i class="fa fa-file fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </article>
                </section>
    )
}

export default Contact;