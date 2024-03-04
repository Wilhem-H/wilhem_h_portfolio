import PropTypes from "prop-types";
import Stepper from "./Stepper";
import "./Experiences.css";

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div className="experiences_content">
      <h1> 2010 - Baccalauréat Scientifique </h1>
      <p>
        Juillet 2010 : Obtention de mon diplome du Baccaléauréat Scientifique
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
        Militaire du Rang <br />
        Mai 2011 : Engagement au sein du 7ème Bataillon de chasseurs Alpins en
        qualité de 1ère classe infanterie.
        <br />
        brevet alpinisme et de skieur militaire
        <br />
        spécialisation radio et système d&apos;information du combatant (haute
        fréquence, basse fréquence, satellite, morse...) <br />
        2013: passage au grade de Caporal chef d&apos;équipe montagne été
        2015:passage au grade de caporal-chef permis poids lourds
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
        Gestion d&apos;un groupe de 10 à 15 personnes en autonomie et en phase
        de combat
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
        apprentissage appronfondie de l&apos;utilisation et de la mise en oeuvre
        de moyen radio et informatiques.
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
        Sous Officier <br />
        gestion quotidienne d&apos;une équipe de 5 à 30 personnes (entrainement,
        emploi du temps, formations, missions...)
        <br />
        déploiement sur le terrain en autonomie <br />
        préparation opérationnelle <br />
        mise en oeuvre de moyens radio et informatiques élaborés
        <br />
        montage et installation de centre de commandement <br />
        sécurité informatique et prévention <br />
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
        découverte de la programmation et du langage python <br />
        autoformation et formation udemy.
        <br />
        python <br />
        git bash <br />
        git <br />
        powershell
        <br />
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
        Préparateur et agent de retour
        <br />
        réception de vehicule de location
        <br />
        cloture des contrats
        <br />
        accompagnement client <br />
        entretien des véhicules
        <br />
        livraisons
        <br />
        suivi du parc
        <br />
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
        Apprentissage des basiques du développement web <br />
        travail en équipe <br />
        méthodologie Agile / Scrum
        <br />
        projets d&apos;équipe et individuel
        <br />
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
        Stagiaire
        <br />
        retro ingeneering API JAVA
        <br />
        étude de besoins
        <br />
        création de documentation et fichier swagger
        <br />
        recherche de solutions alternatives <br />
        élaboration de compte rendu de recherce <br />
        création d&apos;APIs Node JS / TypeScript
        <br />
        création de docker et pipeline gitlab <br />
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
