import React from "react";
import WebElement from "../WebElement/WebElement";

function SectionSkills2() {
  return (
    <>
      <div className="container-skills">
          <div className="titleOther">
            <h2 className="positionSubTitle">Déploiement</h2>
            <h2 className="positionSubTitle">Autre</h2>
            <h2 className="positionSubTitle">Certification</h2>
          </div>
        <div className="devElement">
          <WebElement name={"Netifly"}></WebElement>
          <WebElement name={"Render"}></WebElement>
          <WebElement name={"Figma"}></WebElement>
          <WebElement name={"GitHub"}></WebElement>
          <WebElement name={"Ironhack"}></WebElement>
          <WebElement name={"OpenClassrooms"}></WebElement>
          
        </div>
      </div>
    </>
  );
}

export default SectionSkills2;
