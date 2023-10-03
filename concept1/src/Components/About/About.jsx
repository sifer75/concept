import React from "react";
import "./About.css";

function About({ aboutRef }) {
  return (
    <>
      <div className="about" ref={aboutRef}>
        <div className="positionDescription">
          <h1 className="positionTitle">Salut, moi c'est Fabien.</h1>
          <p className="description">
            Développeur front end passionné par la création de solutions
            numériques innovantes, je suis spécialisé dans la mise en place de
            sites web et d'applications web robustes et performantes. J'aime
            résoudre des problèmes complexes en utilisant des approches
            créatives et des solutions technologiques de pointe. J'apprécie le
            travail en équipe et intégrer les suggestions pour contribuer au
            succès de projets passionnants. Également attentif aux détails,
            orienté vers la qualité et soucieux de l'expérience utilisateur. Je
            m'efforce de créer des produits qui sont esthétiquement plaisants et
            faciles à utiliser.
          </p>
        </div>
        <div className="text-repeat">
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi-light"}}>X&nbsp;</span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi-light" }}>X&nbsp;</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
