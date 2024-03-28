import React from "react";
import  project1 from '../images/project1.png';
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return (
    /* start of projects section */
    <section className="projects">
      <h1 className="section-bg-heading">My Projects</h1>
      <h1 className="section-heading">Portfolio</h1>
      <h3 className="sub-heading">
        my <span>projects</span>
      </h3>
      <div className="projects-cards">
        <div className="project-card">
          <div className="project-img">
            <img src={project1} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Reactjs,</span>
          </div>
          <h3 className="project-name">Web hosting service</h3>
          <p className="project-desc">
            I have a created a simple web hosting website that is mobile
            responsive. "Explore reliable web hosting solutions on our site,
            ensuring fast, secure, and accessible online presence for your
            projects."
          </p>
          <button class="project-btn">
            See Project
            <FontAwesomeIcon icon={faArrowRight} className="contact-icon" />
          </button>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={project2} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript,</span>
          </div>
          <h3 className="project-name">Bag E-commerce</h3>
          <p className="project-desc">
            "Welcome to our eco-friendly bag ecommerce site, where
            sustainability meets style. Browse our curated collection of
            environmentally conscious bags, perfect for conscious consumers who
            prioritize both fashion and the planet."
          </p>
          <button className="project-btn">
            See Project <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={project3} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript,</span>
          </div>
          <h3 className="project-name">Van app</h3>
          <p className="project-desc">
            "Discover the perfect van for your needs with our website, offering
            a wide selection and expert advice for your journey."
          </p>
          <button class="project-btn">
            See Project <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={project4} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript,</span>
          </div>
          <h3 className="project-name">Bootstrap </h3>
          <p className="project-desc">
            "Explore the power and versatility of Bootstrap on our website, your
            ultimate resource for mastering responsive web design."
          </p>
          <button class="project-btn">
            See Project <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={project5} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript,</span>
          </div>
          <h3 className="project-name">Calculator</h3>
          <p className="project-desc">
            "Discover Bootstrap's simplicity and efficiency for crafting
            stunning websites. Elevate your web development game with our
            comprehensive Bootstrap resources."
          </p>
          <button className="project-btn">
            See Project <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={project6} alt="Project 1" />
          </div>
          <div className="techs">
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript,</span>
          </div>
          <h3 className="project-name">Social Media Card</h3>
          <p className="project-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            autem mollitia! Esse architecto vel numquam dolorum enim voluptatum
            vero exercitationem!
          </p>
          <button class="project-btn">
            See Project <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <button className="btn">View More</button>
      </div>
    </section>
  );
};
export default Projects;
