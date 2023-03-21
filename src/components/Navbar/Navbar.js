/*
import React from 'react';
import image0 from '../../images/headline-hub-logo-text.png';
import image1 from '../../images/headline-hub-logo.png';
import image2 from '../../images/location-icon.png';
import image3 from '../../images/weather-icon.png';
import image4 from '../../images/profile-icon.png';

function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top navbar-expand">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <a href="#nav"><img src={image1} alt="headline hub logo" className="nav-img" /></a>
      <a href="#nav"><img src={image0} alt="headline hub initials" className="nav-img" /></a>
      {/* TODO Links to be added to all LI once APIs are pulling relevant info
      /*
        <ul className="nav navbar-nav ms-auto">
          <li className="nav-item"><a href="#"><img src={image3} alt="weather icon" className="nav-img" /></a></li>
          <li className="nav-item"><a href="#"><img src={image2} alt="location pin icon" className="nav-img" /></a></li>
          <li className="nav-item"><a href="#"><img src={image4} alt="user profile icon" className="nav-img" /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
*/

import React, { useState } from 'react';
import image0 from '../../images/headline-hub-logo-text.png';
import image1 from '../../images/headline-hub-logo.png';
import image2 from '../../images/location-icon.png';
import image3 from '../../images/weather-icon.png';
import image4 from '../../images/profile-icon.png';
import { Modal, Button } from "react-bootstrap";
import Weather from "../Localisation/Weather";
import LoginForm from '../LoginForm/LoginForm';

function Navbar() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top navbar-expand">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <a href="#nav"><img src={image1} alt="headline hub logo" className="nav-img" /></a>
        <a href="#nav"><img src={image0} alt="headline hub initials" className="nav-img" /></a>
        <ul className="nav navbar-nav ms-auto">
          <li className="nav-item">
            <a href="#">
              <img src={image3} alt="weather icon" className="nav-img" onClick={() => setShowModal1(true)} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={image2} alt="location pin icon" className="nav-img" onClick={() => setShowModal2(true)} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={image4} alt="user profile icon" className="nav-img" onClick={() => setShowModal3(true)} />
            </a>
          </li>
        </ul>
      </div>

      <Modal show={showModal1} onHide={() => setShowModal1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Weather Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Weather />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal1(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={() => setShowModal2(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Loaction Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal placeholder</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal2(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal3} onHide={() => setShowModal3(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <LoginForm />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal3(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default Navbar;
