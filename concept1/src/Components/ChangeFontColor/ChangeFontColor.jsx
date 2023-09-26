import React from "react";
import { useState } from "react";
import "./ChangeFontColor.css";

function ChangeFontColor({ setSelectedColor }) {
  const [isOpened, setIsOpened] = useState(false);
  const [glowUpColor1, setGlowUpColor1] = useState(false);
  const [glowUpColor2, setGlowUpColor2] = useState(false);
  const [glowUpColor3, setGlowUpColor3] = useState(false);
  const [glowUpColor4, setGlowUpColor4] = useState(false);

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
        onClick={() => handleSelectedColor("rgb(177, 176, 243)")}
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
  );
}

export default ChangeFontColor;
