import React from "react";
import "./ChangeBackgroundColor.css";
import { useState } from "react";
import { useEffect } from "react";

function ChangeBackgroundColor({ nextColor, setNextColor, nextText, setNextText }) {
  const colors = [
    "rgb(237, 106, 62)",
    "rgb(213, 237, 62)",
    "rgb(134, 115, 250)",
    "rgb(63, 205, 237)",
  ];

  const texts = [
    "MONGO DB",
    "EXPRESS JS",
    "REACT",
    "NODE JS",
  ]

  const changeText = () => {
    setNextText((nextText + 1) % texts.length);
  }

  const changeColor = () => {
    setNextColor((nextColor + 1) % colors.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeColor();
      changeText();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [nextColor]);
  return (
    <>
      <span
        className="transitionText"
        style={{
          backgroundColor: colors[nextColor],
        }}
        name="change"
        onClick={(e) => changeColor(e)}
      >
        <span className="kelsiStyle">{texts[nextText]}</span>
      </span>
    </>
  );
}

export default ChangeBackgroundColor;
