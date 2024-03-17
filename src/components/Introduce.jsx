import { motion } from "framer-motion";
import ellipse from "../assets/ellipse.png";
import locWhite from "../assets/locWhite.svg";
import calendarWhite from "../assets/calendarWhite.svg";
import gitWhite from "../assets/gitWhite.svg";
import laptopWhite from "../assets/laptopWhite.svg";
import motivationWhite from "../assets/motivationWhite.svg";

import iconGithubTest from "../assets/test/icon_github.svg";
import iconDiscordeTest from "../assets/test/testDiscorde.svg";
import iconLinkedinTest from "../assets/test/testLinkedin.svg";
import iconMailTest from "../assets/test/testMail.svg";

import "./Introduce.css";

function Content() {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, duration: 1 },
    },
    hidden: { x: 1000, opacity: 0 },
  };

  return (
    <div id="myPresentation">
      <section className="presentation">
        <div className="presentation1">
          <h1>Présentation</h1>
          <p>
            Fort de onze années passées dans l&apos;armée, au 7ème Bataillon de
            chasseurs Alpins, j&apos;ai décidé de me réorienter vers un nouveau
            métier passion : le développement web.
            <br />
            Après une découverte de la programmation par l&apos;apprentissage du
            python et un coup de foudre sans conteste pour l&apos;univers du
            dev, je me suis lancé dans un cursus de formation à la Wild Code
            School pour apprendre le métier de :
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <br />
              Développeur Web et Web Mobile.
            </span>
            <br />
            En parcourant ce portfolio vous découvrirez mes stacks techniques et
            mes principaux projets, Enjoy !
          </p>
          <div>
            <a href=" https://github.com/Wilhem-H" target="_blank">
              <motion.img
                src={iconGithubTest}
                alt="my github account"
                id="testIcon"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, rotate: 180 }}
              />
            </a>
            <a href=" mailto:wilhem.hafsa@outlook.fr" target="_blank">
              <motion.img
                src={iconMailTest}
                alt="my mail"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, rotate: 180 }}
              />
            </a>
            <a
              href=" https://discordapp.com/users/882266818801201222."
              target="_blank"
            >
              <motion.img
                src={iconDiscordeTest}
                alt="my discord account"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, rotate: 180 }}
              />
            </a>
            <a
              href=" https://www.linkedin.com/in/wilhem-hafsa/"
              target="_blank"
            >
              <motion.img
                src={iconLinkedinTest}
                alt="my linkedin account"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, rotate: 180 }}
              />
            </a>
          </div>
        </div>
        <div className="presentation2">
          <motion.img
            src={ellipse}
            alt="photo de Wilhem-H"
            id="photo_portrait"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="presentation2-spec"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.div className="presentation2_loc" variants={variants}>
              <h3>Ma localisation:</h3>
              <p>
                <img src={locWhite} alt="location logo" />
                Région Auvergne Rhône Alpes
              </p>
            </motion.div>
            <motion.div variants={variants}>
              <h3>Mon age:</h3>
              <p>
                <img src={calendarWhite} alt="calendar logo" />
                30 ans
              </p>
            </motion.div>
            <motion.div variants={variants}>
              <h3>Ma recherche:</h3>
              <p>
                <img src={gitWhite} alt="git logo" />
                CDI ou Alternance
              </p>
            </motion.div>
            <motion.div variants={variants}>
              <h3>Mon language:</h3>
              <p>
                <img src={laptopWhite} alt="computer logo" />
                Javascript
              </p>
            </motion.div>
            <motion.div variants={variants}>
              <h3>Ma motivation:</h3>
              <p>
                <img src={motivationWhite} alt="strong logo" />
                100%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Content;
