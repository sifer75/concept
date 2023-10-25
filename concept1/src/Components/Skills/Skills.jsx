import React from "react";
import "./Skills.css";
import { useRef } from "react";
import SectionSkills from "../SectionSkills/SectionSkills";
import SectionSkills2 from '../SectionSkills2/SectionSkills2';

function Skills({ skillsRef }) {
  return (
    <>
      <div className="skills" ref={skillsRef}>
        <h1>Mes Compétences en Dev</h1>
        <SectionSkills></SectionSkills>
        <SectionSkills2></SectionSkills2>
      </div>
    </>
  );
}

export default Skills;
