import React from "react";

const styles = {
    titleStyle: {
        textAlign: "left",
        marginBottom: "30px",
    },
    sectionStyle: {
        backgroundColor: "#F5F5F5",
        paddingBottom: "50px",
        color: "#1D3557"
    },
    cardStyle: {
        textAlign: "left",
        marginBottom: "20px",
        border: "0",
        
    }

}
function Experience() {
    return (
        <div>
            <section id="experience" style={styles.sectionStyle}>
                <div className="row title-row" style={styles.titleStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 mb-10 pt-4" >
                        <h2>Experience</h2>
                        <hr style={{borderColor: "#1D3557"}}/>
                    </div>
                </div>
                <article className="row" style={styles.cardStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-8 border-0" style={{backgroundColor:"#DFE0E0"}}>
                        <div class="card-body"  >
                            <h4 class="place mb-2">Darktrace</h4>
                            <h6 class="role">Account Executive<span style={{float: "right"}}>July 2019 - May 2020</span></h6>
                            <hr />
                            <p class="description">Outside sales representative covering Texas, Oklahoma, Louisiana, Arkansas with travel greater than 50%. Ran the entire sales cycle from prospecting to closing to customer care. Collaborated with Darktrace’s hardware and software engineers to ensure client’s needs are met.</p>
  
                        </div>

                    </div>

                </article>
                <article className="row" style={styles.cardStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-8 border-0" style={{backgroundColor:"#DFE0E0"}}>
                        <div class="card-body"  >
                            <h4 class="place mb-2">CareerPlug</h4>
                            <h6 class="role">Account Executive<span style={{float: "right"}}>July 2017 - July 2019</span></h6>
                           
                            <hr />
                            <p>Key member of a rapidly growing, lean, partner-centric software company. CareerPlug is a values-driven SaaS company that helps our partners with their recruiting, hiring, and new hire onboarding needs. Worked closely with strategic partners to ensure success and drive adoption, with. I owned the onboarding process for CareerPlug’s key industry vertical clientele.</p>
  
                        </div>

                    </div>

                </article>



                <div className="row title-row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 mb-10 pt-4" style={styles.titleStyle}>
                        <h2>Education</h2>
                        <hr style={{borderColor: "#1D3557"}}/>
                    </div>
                </div>
                <article className="row" style={styles.cardStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-8 border-0" style={{backgroundColor:"#DFE0E0"}}>
                        <div class="card-body"  >
                            <h4 class="place mb-1">The University of Texas at Austin</h4>
                            <h6 class="title">Full-Stack Web Development Certificate<span style={{float: "right"}}>2020</span></h6>
  
                        </div>

                    </div>

                </article>
                <article className="row" style={styles.cardStyle}>
                    <div className="col-md-2">
                    </div>
                    <div className="card col-md-8 border-0" style={{backgroundColor: "#DFE0E0"}}>
                        <div class="card-body">
                            <h4>The University of Texas at Austin</h4>
                            <h6>Bachelor of Arts in International Relations and Global Studies<span style={{float: "right"}}>2017</span></h6>
                        </div>

                    </div>

                </article>
            </section>
        </div>

    );
}

export default Experience;
