import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer =()=>{
   return (
     <footer className="footer">
       <div className="icons">
         <FontAwesomeIcon icon={faFacebookF} className="footer-social-media-icon" />
         <FontAwesomeIcon icon={faInstagram} className="footer-social-media-icon" />
         <FontAwesomeIcon icon={faTwitter} className="footer-social-media-icon" />
       </div>

       <div className="copyright">
         <p>&copy; All Rights reserved.</p>
       </div>

       <div className="author">
         <p>
           Made By <span>Bijaya Pun</span>
         </p>
       </div>
     </footer>
   );
}
export default Footer;