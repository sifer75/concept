import React from "react";
import "./FrontPage.css";
import ChangeBackgroundColor from "../ChangeBackgroundColor/ChangeBackgroundColor";
import { useState, useRef } from "react";

function FrontPage({ homeRef }) {
  const [nextColor, setNextColor] = useState(0);
  const [nextText, setNextText] = useState(0);

  return (
    <>
      <div className="presentation" ref={homeRef}>
        <h1 className="h1Presentation">FRONT END DEV.</h1>
        <div className="presentation-mern">
          <ChangeBackgroundColor
            nextColor={nextColor}
            setNextColor={setNextColor}
            nextText={nextText}
            setNextText={setNextText}
          ></ChangeBackgroundColor>
          <p className="paris">BASE A PARIS</p>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
