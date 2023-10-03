import { useEffect, useState } from "react";
import "./Home.css";
import Menu from "../../Components/Menu/Menu";
import FrontPage from "../../Components/FrontPage/FrontPage";
import About from "../../Components/About/about";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Contact from "../../Components/Contact/Contact";
import { useRef } from "react";

function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();
  const [start, setStart] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(!start);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {!start && (
        <div className="page">
          <Menu
            sections={{
              home: homeRef,
              about: aboutRef,
              skills: skillsRef,
              experience: experienceRef,
              contact: contactRef,
            }}
          ></Menu>
          <FrontPage homeRef={homeRef}></FrontPage>
          <About aboutRef={aboutRef}></About>
          <Skills skillsRef={skillsRef}></Skills>
          <Experience experienceRef={experienceRef}></Experience>
          <Contact contactRef={contactRef}></Contact>
        </div>
      )}
    </>
  );
}

export default Home;
