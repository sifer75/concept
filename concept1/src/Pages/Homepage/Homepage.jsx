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
      {isVisible && (
        <div className={"container"} style={{ backgroundColor: selectedColor }}>
          <Circle isVisible={isVisible} setIsVisible={setIsVisible}></Circle>
          <ChangeFontColor
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        </div>
      )}
      {!isVisible && (
        <div className={"page"} style={{ backgroundColor: selectedColor }}>
          <Home></Home>
          <ChangeFontColor
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        </div>
      )}
    </>
  );
}

export default Homepage;
