import React, { useEffect, useState } from "react";
import image5 from '../../images/GitHub-icon.png';
import { Modal, Button } from "react-bootstrap";

function Footer() {
  const [showModal1, setShowModal1] =useState(false);
  return (
    <footer id="footer" className="footer-content">
      <img src={image5} alt="GitHub icon" className="footer-img" onClick={() => setShowModal1(true)} /><br></br>
      © 2023 Copyright || All Rights Reserved

      <Modal show={showModal1} onHide={() => setShowModal1(false)} dialogClassName="github-modal">
        <Modal.Header closeButton dialogClassName="modal-header">
          <Modal.Title><img src={image5} alt="GitHub icon" dialogClassName="modal-img" /></Modal.Title>
        </Modal.Header>
        <Modal.Body dialogClassName="modal-content">
          <ul dialogClassName="modal-content">
            <li dialogClassName="modal-li"><a href="https://github.com/rcm6/headline-hub">Headline Hub repository</a></li>
            <li dialogClassName="modal-li"><a href="https://github.com/rcm6">Russell Coleman GitHub profile</a></li>
            <li dialogClassName="modal-li"><a href="https://github.com/Sho-ayb">Sho'ayb Choudry GitHub profile</a></li>
            <li ><a href="https://github.com/Nikki1162" dialogClassName="modal-link">Nikki Boyle GitHub profile</a></li>
          </ul>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal1(false)} className="modal-button">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}

export default Footer;
