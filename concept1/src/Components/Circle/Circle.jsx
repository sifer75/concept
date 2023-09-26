import React from "react";
import { useState } from "react";
import "./Circle.css";

function Circle() {
    
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <>
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
    </>
  );
}

export default Circle;
