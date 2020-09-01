import React from "react";
import MainPhoto from "../assets/joyce.jpeg";

const styles = {
    titleStyle: {
      textAlign: "left",
    marginBottom: "30px"
    },
   aboutStyle: {
       textAlign: "left"
   },
   imageStyle: {
       height: "200px",
       width: "200x",
       borderRadius: "95%"
   },
   sectionStyle: {
    backgroundColor: "#F5F5F5",
    paddingBottom: "50px",
    color: "#1D3557",
    // fontFamily: "Raleway, sans-serif"
   }
   
  };

function About() {
    return (
        <section id="about" style={styles.sectionStyle}>
            <div className="row title-row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 mb-10" style={styles.titleStyle}>
                <h2>Joyce Young</h2>
                <hr style={{borderColor: "#1D3557"}}/>
                <h4>Full-Stack Web Developer</h4>
            </div>
            <div className="row about-row">
                <div className="col-md-2"></div>
                <div className="col-md-2"><img src={MainPhoto} style={styles.imageStyle}/></div>
                <div className="col-md-6" style={styles.aboutStyle}>
                    <h5>About Me</h5>
                <p>
                I'm a software developer with a background in SaaS and Cyber Security AI Sales and I specialize in building full-stack web applications primarily with JavaScript, HTML/CSS, and MongoDB or MySQL. I studied at the University of Texas at Austin, where I earned my Full-Stack Web Development certificate, and had the opportunity to create multiple projects and collaborate with team mates.</p>
<p>
                Since beginning the course, I've worked on personal applications to strengthen my skills as a developer. I'm excited to continue building expertise in several languages, specifically React and find the right opportunity. When I'm not coding, you can find me tending to my ever-growing plant collection, rock climbing or playing with my sweet Aussie, Ziggy. 
</p>
<p>
I look forward to hearing from you!</p>
</div>
</div>

</div>
          
        </section>
    )
}

export default About;