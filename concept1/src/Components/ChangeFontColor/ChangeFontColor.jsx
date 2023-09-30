import React from "react";
import { useState } from "react";
import "./ChangeFontColor.css";

const colors = [
  "rgb(198, 201, 188)",
  "rgb(177, 176, 243)",
  "rgb(137, 188, 142)",
  "rgb(196, 142, 182)",
  "rgb(100, 123, 12)",
  "rgb(220, 143, 10)",
  "rgb(30, 123, 10",
];

function ChangeFontColor({ setSelectedColor, selectedColor }) {
  const changeColor = (e) => {
    if (e.target.name === "color")
      setSelectedColor(e.target.value);
      console.log(e.target)
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
