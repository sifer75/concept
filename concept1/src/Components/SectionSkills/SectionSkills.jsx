import React from "react";
import WebElement from "../WebElement/WebElement";

function SectionSkills() {
  return (
    <>
      <div className="container-skills">
        <div className="placement">
          <h2 className="positionSubTitle">Web</h2>
        </div>
        <div className="devElement">
          <WebElement name={"Javascript"}></WebElement>
          <WebElement name={"React JS"}></WebElement>
          <WebElement name={"TailwindCSS"}></WebElement>
          <WebElement name={"Mongo DB"}></WebElement>
          <WebElement name={"Express JS"}></WebElement>
          <WebElement name={"Node JS"}></WebElement>
        </div>
      </div>
    </>
  );
}

export default SectionSkills;
