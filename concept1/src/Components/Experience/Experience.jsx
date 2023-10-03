import React from "react";
import { useRef } from "react";
import "./Experience.css";

function Experience({ experienceRef }) {
  return (
    <>
      <div className="projet" ref={experienceRef}>
        <h1 className="positionTitle">Projets</h1>
        <div className="container-projets" style={{fontSize: '2em'}}>
          <div className="puissance4 pos">
            <h2>puissance 4</h2>
          </div>
          <div className="yugioh pos">
            <h2>YU-GI-OH</h2>
          </div>
          <div className="otium pos">
            <h2>Otium</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
