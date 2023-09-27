import React from "react";
import { useState } from "react";
import "./ChangeFontColor.css";

const colors = [
  "rgb(194, 154, 138)",
  "rgb(177, 176, 243)",
  "rgb(137, 188, 142)",
  "rgb(196, 142, 182)",
  "rgb(100, 123, 12",
];

function ChangeFontColor({ setSelectedColor, selectedColor }) {
  const changeColor = (e) => {
    if (e.target.name === "color")
      setSelectedColor(e.target.value);
  }

  return (
    <div
      className={`test-color`}
    >
      {colors.map((color) => {
        return (
          <div key={color} className={`color-show glowUp ${selectedColor === color ? "first" : ""}`} style={{backgroundColor:color}}>
            <input type="radio" value={color} name="color" onClick={(e) => changeColor(e)}/>
          </div>
        );
      })}
    </div>
  );
}

export default ChangeFontColor;
