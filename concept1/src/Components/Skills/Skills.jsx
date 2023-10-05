import React from "react";
import "./Skills.css";
import { useRef } from "react";

function Skills({ skillsRef }) {
  return (
    <>
      <div className="skills" ref={skillsRef}>
        <h1 className="positionTitle">Mes Compétences en Dev</h1>
        <div className="placement">
          <h2 className="positionSubTitle">Web</h2>
        </div>
        <div className="devElement">
          <div className="webElement">
            <p>Javascript</p>
            <div className="javascript"></div>
          </div>
          <div className="webElement">
            <p>React JS</p>
            <div className="react"></div>
          </div>
          <div className="webElement">
            <p>TailwindCSS</p>
            <div className="tailwind"></div>
          </div>
          <div className="webElement">
            <p>Mongo DB</p>
            <div className="mongo"></div>
          </div>
          <div className="webElement">
            <p>Express JS</p>
            <div className="express"></div>
          </div>
          <div className="webElement">
            <p>Node JS</p>
            <div className="node"></div>
          </div>
        </div>
        <div className="titleOther">
          <h2 className="positionSubTitle">Déploiement</h2>
          <h2 className="positionSubTitle">Autre</h2>
          <h2 className="positionSubTitle">Certification</h2>
        </div>
        <div className="devElement">
          <div className="webElement">
            <p>Netifly</p>
            <div className="netifly"></div>
          </div>
          <div className="webElement">
            <p>Render</p>
            <div className="render"></div>
          </div>

          <div className="webElement">
            <p>Figma</p>
            <div className="figma"></div>
          </div>
          <div className="webElement">
            <p>GitHub</p>
            <div className="github"></div>
          </div>

          <div className="webElement">
            <p>Ironhack</p>
            <div className="ironhack"></div>
          </div>
          <div className="webElement">
            <p>Open Classrooms</p>
            <div className="openClassrooms"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
