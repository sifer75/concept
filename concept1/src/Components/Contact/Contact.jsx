import React, { useState } from "react";
import "./Contact.css";
import Eyes from "../Eyes/Eyes";
import { Link } from "react-router-dom";

function Contact({ contactRef }) {
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    setIrisPosition({ x: mouseX, y: mouseY });
  };

  return (
    <>
      <div className="contact" ref={contactRef} onMouseMove={handleMouseMove}>
        <h1>Me Contacter</h1>
        <Eyes irisPosition={irisPosition} happy={isHovered}></Eyes>
        <ul className="devElement">
          <li
            className={"webElement2"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <Link to="mailto:taupinfabien2607@gmail.com" className="lien">
            <p>Email</p>
            <div className="contact-container email"></div>
            </Link>
          </li>
          <li
            className={"webElement2"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <Link to="https://www.linkedin.com/in/fabien-taupin/" className="lien">
            <p>Linkedin</p>
            <div className="contact-container linkedin"></div>
            </Link>
          </li>
          <li
            className={"webElement2"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <Link to="https://github.com/sifer75" className="lien">
            <p>Github</p>
            <div className="contact-container github"></div>
            </Link>
          </li>
          <li
            className={"webElement2"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/cv" className="lien">
              <p>Mon CV</p>
              <div className="contact-container cv"></div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
