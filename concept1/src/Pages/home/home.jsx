import { useEffect, useState } from "react";
import "./Home.css";
import Menu from "../../Components/Menu/Menu";

function Home() {
  const [start, setStart] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(!start);
    }, 2000);

    return () => {
      //   clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {!start && (
        <div className="page">
          <div className="presentation">
            <h1>Bonjour, je m'appelle Fabien </h1>
            <p>Je suis un full stack developer.</p>
          </div>
          <div className="about">
            <h1>a propos de moi</h1>
            <p>
              Je suis Fabien Taupin, un développeur web full stack passionné par
              la création de solutions numériques innovantes. Je suis spécialisé
              dans la conception, la création et la mise en place de sites web
              et d'applications web robustes et performantes. Ce que j'aime
              par-dessus tout, c'est résoudre des problèmes complexes en
              utilisant des approches créatives et des solutions technologiques
              de pointe. J'adore travailler en équipe, collaborer avec d'autres
              professionnels et partager mes connaissances pour contribuer au
              succès de projets passionnants. En plus de mes compétences
              techniques, je suis également attentif aux détails, orienté vers
              la qualité et soucieux de la convivialité de l'expérience
              utilisateur. Je m'efforce de créer des produits qui non seulement
              fonctionnent bien, mais qui sont aussi esthétiquement plaisants et
              faciles à utiliser.
            </p>
            <div>
              <h2>Languages</h2>
			  <ul>
				<li>Français</li>
				<li>Anglais</li>
			  </ul>
			  <ul>
				<li>Natif</li>
				<li>Intermédiaire</li>
			  </ul>
            </div>
          </div>
          <h1>Mes Compétences en Dev</h1>
          <div>
            <h2>Web</h2>
            <div>
				<p>Javascript</p>
			</div>
            <div>
				<p>React JS</p>
			</div>
            <div>
				<p>TailwindCSS</p>
			</div>
            <div>
				<p>MongoDB</p>
			</div>
            <div>
				<p>Express JS</p>
			</div>
            <div>
				<p>Node JS</p>
			</div>
			<div>
				<p>Shell</p>
			</div>
          </div>
          <div>
            <h2>Déploiement</h2>
            <div></div>
          </div>
          <div>
            <h2>Autre</h2>
            <div>
				<p>Figma</p>
			</div>
            <div>
				<p>Git Hub</p>
			</div>
          </div>
          <div>
            <h2>Certification</h2>
            <div>
				<p>OpenClassrooms</p>
				<p>Ironhack</p>
			</div>
          </div>
          <h1>Mon Expérience</h1>
          <div>
            <h2>Payconcent</h2>
            <div></div>
            <h1>Projets</h1>
            <div>
				<p>Puissance 4</p>
				<p>YU-GI-OH</p>
				<p>Otium</p>
			</div>
          </div>
          <h1>Me Contacter</h1>
          <div>
            <p>email</p>
            <p>numero</p>
            <p>linkedin</p>
            <p>github</p>
          </div>
          <Menu></Menu>
        </div>
      )}
    </>
  );
}

export default Home;
