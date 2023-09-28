import { useEffect, useState } from "react";
import "./Home.css";
import Menu from "../../Components/Menu/Menu";
import { Link } from "react-router-dom";
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
          <div className="presentation">
            <h1 ref={homeRef}>Bonjour, je m'appelle Fabien </h1>
            <p>Je suis un full stack developer.</p>
          </div>
          <h1 className="positionTitle" ref={aboutRef}>
            a propos de moi
          </h1>
          <p className="description">
            Je suis Fabien Taupin, un développeur web full stack passionné par
            la création de solutions numériques innovantes. Je suis spécialisé
            dans la conception, la création et la mise en place de sites web et
            d'applications web robustes et performantes. Ce que j'aime
            par-dessus tout, c'est résoudre des problèmes complexes en utilisant
            des approches créatives et des solutions technologiques de pointe.
            J'apprécie le travail en équipe; collaborer avec d'autres
            professionnels, partager mes connaissances et intégrer les
            suggestions pour contribuer au succès de projets passionnants. Je
            suis également attentif aux détails, orienté vers la qualité et
            soucieux de la convivialité de l'expérience utilisateur. Je
            m'efforce de créer des produits qui non seulement fonctionnent bien,
            mais qui sont aussi esthétiquement plaisants et faciles à utiliser.
          </p>
          <div className="cv">
            <Link>
              <h2 className="positionSubTitle">Mon CV</h2>
            </Link>
            <div className="cv-button"></div>
          </div>
          <h1 className="positionTitle" ref={skillsRef}>
            Mes Compétences en Dev
          </h1>
          <div className="placement">
            <h2 className="positionSubTitle">Web</h2>
          </div>
          <div className="devElement">
            <div className="webElement">
              <p>Javascript</p>
              <div className="logo2 javascriptColor">
                <div className="logo javascript"></div>
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
                  <div className="logo figma"></div>
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
              <div className="webElement">
                <p style={{ width: "100px", margin: "0", paddingTop: "5px" }}>
                  Open Classrooms
                </p>
                <div className="logo2 openClassroomsColor">
                  <div className="logo openClassrooms"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="positionTitle" ref={experienceRef}>
            Mon Expérience
          </h1>
          <div className="placement">
            <h2 className="positionSubTitle">Payconcent</h2>
          </div>
          <h1 className="positionTitle">Projets</h1>
          <p>Puissance 4</p>
          <p>YU-GI-OH</p>
          <p>Otium</p>
          <h1 className="positionTitle" ref={contactRef}>
            Me Contacter
          </h1>
          <div>
            <p>email</p>
            <p>linkedin</p>
            <p>github</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
