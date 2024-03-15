import PropTypes from "prop-types";
import Stepper from "./Stepper";
import "./Experiences.css";

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1> 2010 - Baccalauréat Scientifique </h1>
      <p>En juillet 2010, Obtention de mon Baccalauréat Scientifique.</p>
      <div>
        <button onClick={onPrev} disabled>
          Prev
        </button>
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
        <strong>Militaire du rang - 5 ans</strong> <br />
        <br />
        En mai 2011, je m&apos;engage dans la 27ème Brigade d&apos;infanterie de
        montagne, au sein du 7ème Bataillon de Chasseurs Alpins. <br />
        Je m&apos;oriente vers une spécialisation d&apos;opérateur radio et
        j&apos;enchaîne les stages et les qualifications techniques afin de
        devenir opérationnel. <br />
        Je monte petit à petit en grade et continue mon apprentissage du métier,
        je passe caporal puis caporal-chef, et j&apos;effectue diverses
        missions, en France et à l&apos;étranger, notamment en Afrique.
        <br />
        J&apos;apprends le combat en montagne, le morse, le secourisme au
        combat, la gestion d&apos;un stock de matériel et l&apos;utilisation et
        le paramétrage des logiciels des armées, et leurs interconnexions avec
        des systèmes radios.
        <br /> En 2016, je pars pour l&apos;école des Sous-officiers de
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
        Cursus de 5 mois à l&apos;ENSOA. <br />
        J&apos;y apprends les notions essentielles pour devenir un bon chef de
        groupe. Topographie, Combat, capacité physique, géopolitique ou encore
        anglais, l&apos;apprentissage est complet et intensif, et nous apprend à
        diriger des hommes et femmes de manière efficace.
        <br /> Je termine mon cursus d&apos;élève sous-officier en juillet 2016.
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
        Cursus de 5 mois à l&apos;ETNC (Ecole des Transmissions, du Numérique et
        du Cyber). <br /> Plus technique, ce parcours de formation est réservé
        aux sous-officiers SIC (Système d&apos;Information du Combattant).{" "}
        <br /> J&apos;y apprends en détails pendant 5 mois les notions liées à
        ma spécialité radio : morse, informatique, radiofréquence ou satellite,
        paramétrage logiciel... Je découvre ici pour la première fois, les cours
        de réseaux, d&apos;informatique et de cybersécurité.
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
        <strong>Sous-officier - 6 ans</strong> <br />
        <br />À l&apos;issue de mon parcours de près d&apos;un an pour devenir
        sous-officier, je réintègre mon Bataillon avec le grade de Sergent pour
        effectuer de nouvelles missions, cette fois-ci à la tête d&apos;un
        groupe de plusieurs soldats (5 à 15 personnes). Autonome pour me
        déployer en missions et sur le terrain, je suis à même d&apos;effectuer,
        avec mon équipe, toutes les tâches qui me sont confiées. En 2019, je
        deviens Sous-officier adjoint d&apos;une section et gère alors 15 à 30
        soldats au quotidien : entraînement, emploi du temps, formations,
        missions, préparation opérationnelle, gestion du matériel et bien
        d&apos;autres. Je suis promu au grade de sergent-chef en septembre 2021,
        peu de temps avant mon départ de l&apos;institution.
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
      <h1>2020 - Formation Udemy Python</h1>
      <p>
        Peu de temps avant mon départ de l&apos;armée, j&apos;e découvre le
        développement informatique, coup de foudre immédiat, j&apos;entame alors
        un début de reconversion avec une formation Udemy de 3 mois sur le
        langage Python. J&apos;y apprends les bases la programmation, de
        l&apos;algorithmie, et de l&apos;orienter objet. <br />
        Notions abordées : python / git / terminal / algorithmie / orienté
        objet…
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
        <strong>Agent de retour et préparateur - 1 an.</strong>
        <br />
        <br />
        En charge des retours véhicules des clients, de l&apos;établissement
        d&apos;états des lieux, de la clôture des contrats, de
        l&apos;accompagnement client, de l&apos;entretien des véhicules, des
        livraisons de véhicules et de la gestion et du suivi du parc.
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
        Début Février 2023 à fin Décembre 2023. <br />
        Apprentissage du métier de développeur à la Wild Code School sur Valence
        sous un format hybride (télétravail / présentiel). Durant 8 mois,
        j&apos;ai donc appris les bases pour devenir développeur fullstack,
        notamment avec la pratique d&apos;exercices d&apos;algo, de hackathons
        et de projets en équipe en suivant les méthodologies Agile. Un parcours
        intensif qui apporte toutes les bases pour mettre le pied à
        l&apos;étrier.
        <br /> Notions abordées : HTML / CSS / JS / TS / SQL – Express / React /
        Node / Prisma / Docker - SCRUM / Git / Git-hub / Figma / Canva / slack /
        services google / discord / TDD
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
        <strong>Stagiaire Développeur Back-end- 2.5 mois</strong>
        <br />
        <br />
        Stage de fin de cursus de 2 mois et demi durant lesquels j&apos;ai
        énormément appris. Retro-engineering d&apos;API Java, création de
        documentations, recherches approfondies de solutions alternatives ou
        encore création from scratch d&apos;API Node JS/ Express/TypeScript...{" "}
        <br />
        Ce stage a été la parfaite école du métier de développeur et j&apos;en
        ressors motivé et déterminé. Notions abordées : Java / Spring / Node Js
        / Express / Typescript / SQLite – Swagger / Docker / Gitlab / Puppeteer
        / Postman
      </p>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext} disabled>
          Next
        </button>
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
      <h1 id="experiences_main_title">Mes Expériences</h1>
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
