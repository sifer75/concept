import React from "react";
import "./Contact.css"

function Contact({ contactRef }) {
  return (
    <>
      <div className="contact" ref={contactRef}>
        <h1 className="positionTitle">Me Contacter</h1>
        <div className="position"></div>
        <div className="footer">
          <p>email</p>
          <div></div>
        </div>
        <div className="footer">
          <p>linkedin</p>
          <div></div>
        </div>
        <div className="footer">
          <p>github</p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
