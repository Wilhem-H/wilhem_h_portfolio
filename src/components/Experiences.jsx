import PropTypes from "prop-types";
import Stepper from "./Stepper";
import "./Experiences.css";

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1> 2010 - Baccalauréat Scientifique </h1>
      <p>
        En juillet 2010, j&apos;obtiens mon Baccalauréat Scientifique à
        l&apos;âge de 18ans.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2011 - 7ème Bataillon de Chasseurs Alpins</h1>
      <p>
        En mai 2011, je m&apos;engage dans la 27ème Brigade d&apos;infanterie de
        montagne, au sein du 7ème Bataillon de Chasseurs Alpins en qualité de
        militaire du rang, 1ère classe. Je deviens très vite opérateur radio et
        passe divers stages de qualifications techniques pour apprendre à
        utiliser les systèmes radios des armées. <br />
        En 2013 je passe Caporal puis j&apos;effectue diverses missions en
        Afrique.
        <br />
        En 2015, je suis promu au grade de Caporal-chef lors d&apos;une mission
        en Afrique centrale.
        <br /> À mon retour, je pars pour l&apos;école des Sous-officiers de
        Saint-Maixent : l&apos;ENSOA.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2016 - Ecole Nationnale des Sous-Officiers d&apos;Active</h1>
      <p>
        Durant mon cursus de 5 mois à l&apos;ENSOA, j&apos;apprends les notions
        essentielles pour devenir un bon chef de groupe. Topographie, Combat,
        capacité physique, géopolitique ou encore anglais, l&apos;apprentissage
        est complet et nous apprend à diriger des hommes et femmes de manière
        efficace. Je termine mon cursus avec la note générale de 16 en juillet
        2016.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2017 - Ecole Nationnale des Transmissions</h1>
      <p>
        Dans ce cursus à l’ETRS, plus technique et réservé aux sous-officiers
        SIC (Système d’Information du Combattant) j’apprends en détails les
        notions liées à ma spécialité radio, morse, informatique, radiofréquence
        ou satellite pendant 5 mois. Je découvre ici pour la première les cours
        de réseaux et d’informatique que j’affectionne particulièrement, je
        passe de 6/20 à mes tests d’entrées à 20/20 à mes tests finaux. C’est
        alors le début de mon histoire dans l’informatique.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example5 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2017 - 7ème Bataillon de Chasseurs Alpins</h1>
      <p>
        À l’issue de mon parcours de près d’un an pour devenir sous-officier, je
        réintègre mon Bataillon avec le grade de Sergent pour effectuer de
        nouvelles missions, cette fois-ci à la tête d’un groupe de plusieurs
        soldats (5 à 15 personnes). Je suis capable de me déployer en missions
        et sur le terrain afin d’effectuer les missions qui me sont confiées en
        toute autonomie avec mes hommes. En 2019, je deviens Sous-officier
        adjoint d’une section et gère alors 15 à 30 soldats au quotidien :
        entraînement, emploi du temps, formations, missions, préparation
        opérationnelle, gestion du matériel et bien d’autres. Je suis promu au
        grade de sergent-chef en septembre 2021, peu de temps avant mon départ
        de l’institution.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example6 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>Formation python</h1>
      <p>
        Peu de temps avant mon départ de l’armée, j’ai découvert le
        développement informatique que je ne connaissais pas, coup de foudre
        immédiat, j’ai débuté l’apprentissage avec une excellente formation
        Udemy de 3 mois sur le langage Python. Me voilà alors décidé à quitter
        l’armée et à me réorienter vers un métier du développement. Notions
        abordées : python / git / terminal / algorithmie / orienté objet…
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example7 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2021 - Avis Budget Group</h1>
      <p>
        Pour effectuer au mieux la mise en place de ma reconversion et pendant
        que j’effectuais toutes les démarches, j’ai travaillé chez Avis Budget
        Group à Alixan. Engagé dans le groupe en tant qu’agent de retour,
        j’étais en charge des retours véhicules des clients, de l’établissement
        d’états des lieux, de la clôture des contrats, de l’accompagnement
        client, de l’entretien des véhicules, des livraisons de véhicules et de
        la gestion et du suivi du parc.
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example8 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2023 - Wild Code School</h1>
      <p>
        Février 2023, j’ai donc débuté mon apprentissage du métier de
        développeur à la Wild Code School sur Valence sous un format hybride
        (télétravail / présentiel). Durant 8 mois, j’ai donc appris les bases
        pour devenir développeur fullstack, notamment avec la pratique
        d’exercices d’algo, de hackathons et de projets en équipe en suivant les
        méthodologies Agile. Un parcours intensif qui apporte toutes les bases
        pour mettre le pied à l’étrier. Notions abordées : HTML / CSS / JS / TS
        / SQL – Express / React / Node / Prisma / Docker - SCRUM / Git / Git-hub
        / Figma / Canva / slack / services google / discord / TDD
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const Example9 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1>2023 - Slamflow</h1>
      <p>
        Stage de fin de cursus de 2 mois et demi durant lesquels j’ai énormément
        appris. Retro-engineering d’API, création de documentations, recherches
        approfondies de solutions ou encore création from scratch d’API Node JS/
        Express, j’en ressors plus motivé que jamais à évoluer dans ce parcours.
        Notions abordées : Java / Spring / Node Js / Express / Typescript /
        SQLite – Swagger / Docker / Gitlab / Puppeteer / Postman
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default function Experiences() {
  const list = [
    <Example1 key="1" />,
    <Example2 key="2" />,
    <Example3 key="3" />,
    <Example4 key="4" />,
    <Example5 key="5" />,
    <Example6 key="6" />,
    <Example7 key="7" />,
    <Example8 key="8" />,
    <Example9 key="9" />,
  ];
  return (
    <div className="experiences" id="myExperiences">
      <h1>Mes Expériences</h1>
      <Stepper list={list} />
    </div>
  );
}

const commonPropTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};

Example1.propTypes = commonPropTypes;
Example2.propTypes = commonPropTypes;
Example3.propTypes = commonPropTypes;
Example4.propTypes = commonPropTypes;
Example5.propTypes = commonPropTypes;
Example6.propTypes = commonPropTypes;
Example7.propTypes = commonPropTypes;
Example8.propTypes = commonPropTypes;
Example9.propTypes = commonPropTypes;
