import React, { useState } from "react";
import "./Eyes.css";

function Eyes({ irisPosition, happy, setHappy }) {
  const handleMouseOn = () => {
    setHappy(true);
  };
  const handleMouseOff = () => {
    setHappy(false);
  };
  return (
    <>
      <div className="face">
        <div className="eyes">
          <div className="eye">
            <div
              className="iris"
              style={{
                transform: `translate(${irisPosition.x}%, ${irisPosition.y}%)`,
              }}
            ></div>
          </div>
          <div className="eye">
            <div
              className="iris"
              style={{
                transform: `translate(${irisPosition.x}%, ${irisPosition.y}%)`,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`arc ${happy ? "smile" : ""}`}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseOff}
        ></div>
      </div>
    </>
  );
}

export default Eyes;
