import React from "react";
import image5 from '../../images/GitHub-icon.png';

function Footer() {
  return (
    <footer id="footer" className="footer-content">
      <img src={image5} alt="GitHub logo" className="footer-img" /><br></br>
      © 2023 Copyright || All Rights Reserved
    </footer>
  );
}

//TODO add modal to GitHub icon

export default Footer;
