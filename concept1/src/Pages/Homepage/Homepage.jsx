import React, { useState } from "react";
import Circle from "../../Components/Circle/Circle";
import ChangeFontColor from "../../Components/ChangeFontColor/ChangeFontColor";
import "./Homepage.css";
import Home from "../home/home";

function Homepage() {
  const [selectedColor, setSelectedColor] = useState("rgb(194, 154, 138)");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className={"page container"} style={{ backgroundColor: selectedColor }}>
        <Circle isVisible={isVisible} setIsVisible={setIsVisible}></Circle>
        <ChangeFontColor setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        {!isVisible && <Home/>}
      </div>
    </>
  );
};

export default Homepage;
