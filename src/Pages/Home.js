import React from "react";
import developer from '../images/developer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";


const Home = ()=>{
    return (
      <div className="home-container">
        <section className="Landing">
          <div className="banner">
            <h1 className="section-bg-heading">Web Developer</h1>
            <div className="developer-info">
              <h3 className="greeting">
                Hello, <span>my name is</span>
              </h3>
              <h1 className="name">
                <span>Bijaya</span> Pun
              </h1>
              <h3 className="prof">
                I am <span>Web Developer</span>
              </h3>
              <p className="about">
                Dynamic Front End Developer with a passion for creating visually
                stunning and highly functional user interfaces. Proficient in
                HTML, CSS,JavaScript,Git/Github and CI/CD pipeline with expertise in modern frameworks
                such as React.js. Dedicated to crafting seamless
                user experiences and staying abreast of emerging web
                technologies. Skilled in collaborating with cross-functional
                teams to deliver exceptional digital solutions. Ready to
                leverage technical proficiency and creativity to drive
                innovation and exceed project goals.
              </p>
              <div className="social-media">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social-media-icon"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-media-icon"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-media-icon "
                />
              </div>
              <div className="cv">
                <button type="button" className="btn cv-btn">
                  Download cv
                </button>
                <span className="cv-span">My skills</span>
              </div>
            </div>
            <div className="developer-img">
              <div className="dev-img-wrapper">
                <img src={developer} alt="developer" />
              </div>
              <div className="dev-experience dev-work">
                <span>1</span>
                <span>years of experience</span>
              </div>
              <div className="dev-projects dev-work">
                <span>10+</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
 }
 export default Home;