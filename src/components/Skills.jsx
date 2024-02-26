import "./Skills.css";

import iconNodejs from "../assets//icons/icon_nodejs.svg";
import icon_express from "../assets//icons/icon_expressJs.svg";
import icon_ts from "../assets//icons/icon_ts.svg";
import icon_mysql from "../assets//icons/icon_mysql.svg";
import icon_bdd from "../assets//icons/icon_bdd.png";
import icon_html from "../assets//icons/icon_html.svg";
import icon_css from "../assets//icons/icon_css.svg";
import icon_js from "../assets//icons/icon_js.svg";
import icon_react from "../assets//icons/icon_react.svg";
import icon_git from "../assets//icons/icon_git.svg";
import icon_github from "../assets//icons/icon_github.svg";
import icon_npm from "../assets//icons/icon_npm.svg";
import icon_gitlab from "../assets//icons/icon_gitlab.svg";
import icon_python from "../assets//icons/icon_python.svg";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <section className="skills_content">
        <div className="skills_backAndbdd">
          <div className="skills_back">
            <h3>Back-End</h3>
            <p>
              <img src={iconNodejs} alt="" />. Node JS <br />{" "}
              <img src={icon_express} alt="" />. Express JS
              <br /> <img src={icon_ts} alt="" />. TypeScript
            </p>
          </div>
          <div className="skills_bdd">
            <h3>Base de données</h3>
            <p>
              <img src={icon_mysql} alt="" />. MYSQL <br />. SQL WORKBENCH
              <br /> <img src={icon_bdd} alt="" />. SQLite
            </p>
          </div>
        </div>
        <div className="skills_front">
          <h3>Front-End</h3>
          <p>
            <img src={icon_html} alt="" />. HTML 5 <br />
            <img src={icon_css} alt="" />. CSS 3<br />
            <img src={icon_js} alt="" />. JavaScript <br />
            <img src={icon_ts} alt="" />. TypeScript <br />
            <img src={icon_react} alt="" />. REACT JS
          </p>
        </div>
        <div className="skills_plus">
          <h3>Les +</h3>
          <p>
            <img src={icon_git} alt="" />. GIT <br />{" "}
            <img src={icon_github} alt="" />. GIT-HUB
            <br /> <img src={icon_npm} alt="" />. NPM <br />{" "}
            <img src={icon_gitlab} alt="" />. GITLAB <br />{" "}
            <img src={icon_python} alt="" />. PYTHON
          </p>
        </div>
      </section>
    </div>
  );
}
