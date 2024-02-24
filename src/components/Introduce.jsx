import ellipse from "../assets/ellipse.png";
import githubBlack from "../assets/githubBlack.svg";
import discordBlack from "../assets/discordBlack.svg";
import mailBlack from "../assets/mailBlack.svg";
import linkedinBlack from "../assets/linkedinBlack.svg";
import locWhite from "../assets/locWhite.svg";
import calendarWhite from "../assets/calendarWhite.svg";
import gitWhite from "../assets/gitWhite.svg";
import laptopWhite from "../assets/laptopWhite.svg";
import motivationWhite from "../assets/motivationWhite.svg";

import "./Introduce.css";

function Content() {
  return (
    <div id="myPresentation">
      <section className="presentation">
        <div className="presentation1">
          <h1>Présentation</h1>
          <p>
            Après 11 années passées dans l’armée, au 7ème Bataillon de chasseurs
            Alpins, j’ai décidé de me réorienté vers un nouveau métier passion :
            le développement web.
            <br />
            En effet, c’est dans ma dernière année sous les drapeaux que j’ai
            découvert un peu par hasard la programmation et plus
            particulièrement le langage python. Coup de foudre sans conteste,
            j’ai voulu en savoir un peu plus sur le sujet et me voilà
            aujourd’hui lancé à pleine vitesse dans un cursus de reconversion à
            la Wild Code School, dans une formation d’un peu moins d’une année
            pour apprendre le métier de développeur Web et Web mobile.
            <br /> En parcourant ce portfolio vous découvrirez mes différents
            projets, au fil du temps mes connaissances dans le domaine ont
            énormément évoluées, vous pourrez suivre cette évolution sur le
            rendu de chaque projet. Enjoy !
          </p>
          <div>
            <a href=" https://github.com/Wilhem-H">
              <img src={githubBlack} alt="my github account" />
            </a>
            <a href=" https://discordapp.com/users/882266818801201222.">
              <img src={discordBlack} alt="my discord account" />
            </a>
            <a href=" mailto:wilhem.hafsa@outlook.fr" target="_blank">
              <img src={mailBlack} alt="my mail" />
            </a>
            <a href=" https://www.linkedin.com/in/wilhem-hafsa/">
              <img src={linkedinBlack} alt="my linkedin account" />
            </a>
          </div>
        </div>
        <div className="presentation2">
          <img src={ellipse} alt="photo de Wilhem-H" />
          <div className="presentation2-spec">
            <div>
              <h3>Ma localisation:</h3>
              <p>
                <img src={locWhite} alt="" />
                Région Auvergne Rhône Alpes
              </p>
            </div>
            <div>
              <h3>Mon Age:</h3>
              <p>
                <img src={calendarWhite} alt="" />
                30 ans
              </p>
            </div>
            <div>
              <h3>Mes projets:</h3>
              <p>
                <img src={gitWhite} alt="" />6 +
              </p>
            </div>
            <div>
              <h3>Mon Language:</h3>
              <p>
                <img src={laptopWhite} alt="" />
                Javascript
              </p>
            </div>
            <div>
              <h3>Ma motivation:</h3>
              <p>
                <img src={motivationWhite} alt="" />
                100%
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
