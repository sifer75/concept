import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [glowUpColor1, setGlowUpColor1] = useState(false);
  const [glowUpColor2, setGlowUpColor2] = useState(false);
  const [glowUpColor3, setGlowUpColor3] = useState(false);
  const [glowUpColor4, setGlowUpColor4] = useState(false);
  const [selectedColor, setSelectedColor] = useState("rgb(194, 154, 138)");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  const handleMouseOn = () => {
    setIsOpened(true);
  };

  const handleMouseOut = () => {
    setIsOpened(false);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const handleGlowUp = (color) => {
    if (color === "color1") {
      setGlowUpColor1(true);
      setGlowUpColor2(false);
      setGlowUpColor3(false);
      setGlowUpColor4(false);
    } else if (color === "color2") {
      setGlowUpColor1(false);
      setGlowUpColor2(true);
      setGlowUpColor3(false);
      setGlowUpColor4(false);
    } else if (color === "color3") {
      setGlowUpColor1(false);
      setGlowUpColor2(false);
      setGlowUpColor3(true);
      setGlowUpColor4(false);
    } else if (color === "color4") {
      setGlowUpColor1(false);
      setGlowUpColor2(false);
      setGlowUpColor3(false);
      setGlowUpColor4(true);
    }
  };

  const handleTurnOff = () => {
    setGlowUpColor1(false);
    setGlowUpColor2(false);
    setGlowUpColor3(false);
    setGlowUpColor4(false);
  };

  return (
    <>
      <div className={"container"} style={{ backgroundColor: selectedColor }}>
        <button
          className={`font ${isVisible ? "" : "fade-out"}`}
          onClick={handleButtonClick}
        >
          <div
            className={`bounce ${isHovered ? "hovered" : "notHovered"} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle"></div>
          </div>
          <div className="circle-text">Appuyez sur le cercle pour entrer</div>
        </button>
        <div
          className={`font-color ${isOpened ? "opened" : "closed"}`}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseOut}
        >
          <button
            className={`color-show color1 ${glowUpColor1 ? "glowUp" : ""}`}
            onMouseEnter={() => handleGlowUp("color1")}
            onMouseLeave={handleTurnOff}
            onClick={() => handleSelectedColor(" rgb(194, 154, 138)")}
          ></button>
          <button
            className={`color-show color2 ${glowUpColor2 ? "glowUp" : ""}`}
            onMouseEnter={() => handleGlowUp("color2")}
            onMouseLeave={handleTurnOff}
            onClick={() => handleSelectedColor(" rgb(140, 139, 193)")}
          ></button>
          <button
            className={`color-show color3 ${glowUpColor3 ? "glowUp" : ""}`}
            onMouseEnter={() => handleGlowUp("color3")}
            onMouseLeave={handleTurnOff}
            onClick={() => handleSelectedColor(" rgb(137, 188, 142)")}
          ></button>
          <button
            className={`color-show color4 ${glowUpColor4 ? "glowUp" : ""}`}
            onMouseEnter={() => handleGlowUp("color4")}
            onMouseLeave={handleTurnOff}
            onClick={() => handleSelectedColor(" rgb(196, 142, 182)")}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
