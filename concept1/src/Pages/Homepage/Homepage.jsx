import React, { useState } from "react";
import Circle from "../../Components/Circle/Circle";
import ChangeFontColor from "../../Components/ChangeFontColor/ChangeFontColor";
import "./Homepage.css";

function Homepage() {
  const [selectedColor, setSelectedColor] = useState("rgb(194, 154, 138)");

  return (
    <>
      <div className={"container"} style={{ backgroundColor: selectedColor }}>
        <Circle></Circle>
        <ChangeFontColor setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </>
  );
}

export default Homepage;
