import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "../Scroll/Scroll";

import "./Experience.css";

function Experience({ experienceRef }) {

  const [currentDiv, setCurrentDiv] = (useState(0));

  const scrollNext = () => {
    if (currentDiv < 2) {
      setCurrentDiv(currentDiv + 1);
      console.log(currentDiv)

    }
  }

  const scrollPrev = () => {
    if (currentDiv > 0) {
      setCurrentDiv(currentDiv - 1);
      console.log(currentDiv)

    }
  }
  console.log(currentDiv)
  return (
    <>
      <div className="projet" ref={experienceRef}>
        <h1>Mes Travaux</h1>
        <Scroll scrollNext={scrollNext} scrollPrev={scrollPrev}></Scroll>
        <div className={`sectionProject ${currentDiv === 0 ? "" : "display"}`}>
          <div className="image1 displaying"></div>
          <div className="descImage">
            <h2>Game Board</h2>
            <p>Cloned the famous Puissance 4 game using DOM manipulation</p>
            <div>
              <div className="linkGit">
                <Link
                  to="https://sifer75.github.io/puissance4"
                  className="button2"
                >
                  <div>
                    <p>View Website</p>
                  </div>
                </Link>
                <Link to="https://github.com/sifer75/puissance4">
                  <div className="logoGit"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`sectionProject ${currentDiv === 1 ? "" : "display"}`}>
          <div className="image2 displaying"></div>
          <div className="descImage">
            <h2>React App</h2>
            <p>
              App to create game card. <br></br>Use of an API to create the
              database
            </p>
            <div>
              <div className="linkGit">
                <Link
                  to="https://yu-gi-oh-oh-oh.netlify.app"
                  className="button2"
                >
                  <div>
                    <p>View Website</p>
                  </div>
                </Link>
                <Link to="https://github.com/sifer75/YU-GI-OH">
                  <div className="logoGit"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`sectionProject ${currentDiv === 2 ? "" : "display"}`}>
          <div className="image3 displaying"></div>
          <div className="descImage">
            <h2>Full Stack MERN</h2>
            <p>
              With the help of Mango DB for the database storage, React JS on
              the front, we manage to create a full stack app for luxurious real
              estate.
            </p>
            <div>
              <div className="linkGit">
                <Link
                  to="https://stupendous-hamster-5137f5.netlify.app/"
                  className="button2"
                >
                  <div>
                    <p>View Website</p>
                  </div>
                </Link>
                <Link to="https://github.com/sifer75/back-otium">
                  <div className="logoGit"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
