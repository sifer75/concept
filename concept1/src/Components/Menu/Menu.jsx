import React from "react";
import "./Menu.css";

function Menu({ sections }) {
  const goingTo = (element) => {
    const sectionRef = sections[element];
    if (sectionRef  && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
     } 
  };

  return (
    <>
      <ul className="menu">
        <li onClick={() => goingTo("home")}>Home</li>
        <li onClick={() => goingTo("about")}>about</li>
        <li onClick={() => goingTo("skills")}>skills</li>
        <li onClick={() => goingTo("experience")}>experience</li>
        <li onClick={() => goingTo("contact")}>contact</li>
      </ul>
    </>
  );
}

export default Menu;
