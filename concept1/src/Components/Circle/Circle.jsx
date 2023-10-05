import React from "react";
import "./Circle.css";

function Circle({isVisible, setIsVisible}) {

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button
        className={`font ${isVisible ? "" : "fade-out"}`}
        onClick={handleButtonClick}
      >
        <div className={`bounce`}>
          <div className="circle"></div>
        </div>
        <div className="circle-text">Appuyez sur le cercle pour entrer</div>
      </button>
    </>
  );
}

export default Circle;
