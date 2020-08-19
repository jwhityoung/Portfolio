import React from "react";


const styles = {
    titleStyle: {
        textAlign: "left",
        color: "#F1FAEE"

    },
    cardStyle: {
        marginRight: "15px",
        marginBottom: "50px",
        backgroundColor: "#F1FAEE"
    }
}

function Contact() {
    return (
        
            <section style={{ backgroundColor: "#1D3557" }}>
                <div className="row title-row" style={styles.titleStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 mb-10 pt-4" >
                        <h2>Contact Me</h2>
                        <hr style={{borderColor: "#F1FAEE"}}/>
                    </div>
                </div>
               
                <article className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                            <a href="https://www.linkedin.com/in/jwhityoung/"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                            <a href="https://github.com/jwhityoung"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body"  >
                        <a href = "mailto: jwhityoung@gmail.com"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="card col-md-2 border-0" style={styles.cardStyle}>
                        <div class="card-body">
                            <a class="place mb-2" href="#"><i class="fa fa-file fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </article>
                </section>
    )
}

export default Contact;