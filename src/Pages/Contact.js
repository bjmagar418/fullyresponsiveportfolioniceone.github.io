import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faPhone,
  faAsterisk,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Contact = () => {
  return (
    <section className="contact">
      <h1 className="section-bg-heading">Contact</h1>
      <h1 className="section-heading">Contact</h1>
      <h3 className="sub-heading">
        Let's<span>have some talk</span>
      </h3>
      <div className="contact-content">
        <div className="contact-left">
          <div className="address">
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
            <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
            <div className="contact-info">
              <span>Address</span>
              <span>Kathmandu,Nepal</span>
            </div>
          </div>
          <div className="contact-line"></div>

          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />

            <div className="contact-info">
              <span>Email</span>
              <span>bjmagar418@gmail.com</span>
            </div>
          </div>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
            <div className="contact-info">
              <span>phone</span>
              <span>+9779821128706</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <div className="input-groups">
              <div className="input-group">
                <label for="name">
                  Your full name
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    className="contact-icon1"
                  />
                </label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label for="name">
                  Your email
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    className="contact-icon1"
                  />
                </label>
                <input type="email" />
              </div>
            </div>
            <div className="input-group">
              <label for="subjects">
                Your Subjects
                <FontAwesomeIcon icon={faAsterisk} className="contact-icon1" />
              </label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label for="message">
                Your message
                <FontAwesomeIcon icon={faAsterisk} className="contact-icon1" />
              </label>
              <textarea></textarea>
            </div>
            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;


