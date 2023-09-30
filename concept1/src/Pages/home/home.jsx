import { useEffect, useState } from "react";
import "./Home.css";
import Menu from "../../Components/Menu/Menu";
import { useRef } from "react";
import ChangeBackgroundColor from "../../Components/ChangeBackgroundColor/ChangeBackgroundColor";

function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();
  const [start, setStart] = useState(true);
  const [nextColor, setNextColor] = useState(0);
  const [nextText, setNextText] = useState(0);
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
          <div className="presentation" ref={homeRef}>
            <h1 className="h1Presentation">FRONT END DEV.</h1>
            <div className="presentation-mern">
              <ChangeBackgroundColor
                nextColor={nextColor}
                setNextColor={setNextColor}
                nextText={nextText}
                setNextText={setNextText}
              ></ChangeBackgroundColor>
              <p className="paris">BASE A PARIS</p>
            </div>
          </div>
          <div className="about" ref={aboutRef}>
            <div className="positionDescription">
              <h1 className="positionTitle">Salut, moi c'est Fabien.</h1>
              <p className="description">
                Développeur front end passionné par la création de solutions
                numériques innovantes, je suis spécialisé dans la mise en place
                de sites web et d'applications web robustes et
                performantes.J'aime résoudre des problèmes complexes en
                utilisant des approches créatives et des solutions
                technologiques de pointe. J'apprécie le travail en équipe et
                intégrer les suggestions pour contribuer au succès de projets
                passionnants. Également attentif aux détails, orienté vers la
                qualité et soucieux de l'expérience utilisateur. Je m'efforce de
                créer des produits qui sont esthétiquement plaisants et faciles
                à utiliser.
              </p>
            </div>
            <div className="div-text-repeat">
              <span className="text-repeat">
                {" "}
                LET'S TALK&nbsp;{" "}
                <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
              </span>
              <span className="text-repeat">
                {" "}
                LET'S TALK&nbsp;{" "}
                <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
              </span>
              <span className="text-repeat">
                {" "}
                LET'S TALK&nbsp;{" "}
                <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
              </span>
            </div>
          </div>
          <div className="skills" ref={skillsRef}>
            <h1 className="positionTitle">Mes Compétences en Dev</h1>
            <div className="placement">
              <h2 className="positionSubTitle">Web</h2>
            </div>
            <div className="devElement">
              <div className="webElement">
                <p>Javascript</p>
                <div className="logo2 javascriptColor">
                  <div className="logo3 javascript"></div>
                </div>
              </div>
              <div className="webElement">
                <p>React jS</p>
                <div className="logo2 reactColor">
                  <div className="logo react"></div>
                </div>
              </div>
              <div className="webElement">
                <p>TailwindCSS</p>
                <div className="logo2 tailwindColor">
                  <div className="logo tailwind"></div>
                </div>
              </div>
              <div className="webElement">
                <p>MongoDB</p>
                <div className="logo2 mongoColor">
                  <div className="logo mongo"></div>
                </div>
              </div>
              <div className="webElement">
                <p>Express JS</p>
                <div className="logo2 expressColor">
                  <div className="logo express"></div>
                </div>
              </div>
              <div className="webElement">
                <p>Node JS</p>
                <div className="logo2 nodeColor">
                  <div className="logo node"></div>
                </div>
              </div>
            </div>
            <div className="placement">
              <h2 className="positionSubTitle">Déploiement</h2>
            </div>
            <div className="devElement">
              <div className="webElement">
                <p>Netifly</p>
                <div className="logo2 netiflyColor">
                  <div className="logo netifly"></div>
                </div>
              </div>
              <div className="webElement">
                <p>Render</p>
                <div className="logo2 renderColor">
                  <div className="logo render"></div>
                </div>
              </div>
            </div>
            <div className="placement">
              <div className="titleOther">
                <h2 className="positionSubTitle">Autre</h2>
                <h2 className="positionSubTitle">Certification</h2>
              </div>
            </div>
            <div className="otherCercifiaction">
              <div className="devElement">
                <div className="webElement">
                  <p>Figma</p>
                  <div className="logo2 figmaColor">
                    <div className="logo3 figma"></div>
                  </div>
                </div>
                <div className="webElement">
                  <p>GitHub</p>
                  <div className="logo2 githubColor">
                    <div className="logo github"></div>
                  </div>
                </div>
              </div>
              <div className="devElement">
                <div className="webElement">
                  <p>Ironhack</p>
                  <div className="logo2 ironhackColor">
                    <div className="logo ironhack"></div>
                  </div>
                </div>
                <div className="webElement classroom">
                  <p>Open Classrooms</p>
                  <div className="logo2 openClassroomsColor">
                    <div className="logo3 openClassrooms"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projet" ref={experienceRef}>
            <h1 className="positionTitle h1Projets">Projets</h1>
            <div className="container-projets size">
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
          <div className="contact" ref={contactRef}>
            <h1 className="positionTitle">Me Contacter</h1>
            <div className="footer-x">
              <p>email</p>
              <div></div>
            </div>
            <div className="footer-x">
              <p>linkedin</p>
              <div></div>
            </div>
            <div className="footer-x">
              <p>github</p>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
