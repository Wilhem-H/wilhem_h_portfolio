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
          <div className="skills_back" id="skillsBack">
            <h3>Back-End</h3>
            <p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={iconNodejs} alt="node js logo" />
                    </td>
                    <td>. Node JS</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={icon_express} alt="express Js logo" />
                    </td>
                    <td>. Express JS</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={icon_ts} alt="typescript logo" />
                    </td>
                    <td>. TypeScript</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <div className="skills_bdd" id="skillsBdd">
            <h3>Base de données</h3>
            <p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={icon_mysql} alt="mysql_logo" />
                    </td>
                    <td>. MYSQL</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={icon_bdd} alt="sqlite logo" />
                    </td>
                    <td>. SQLite</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
        <div className="skills_front">
          <h3>Front-End</h3>
          <p>
            <table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={icon_html} alt="html logo" />
                  </td>
                  <td>. HTML 5</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_css} alt="css logo" />
                  </td>
                  <td>. CSS 3</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_js} alt="js logo" />
                  </td>
                  <td>. JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_ts} alt="typescript logo" />
                  </td>
                  <td>. TypeScript</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_react} alt="react logo" />
                  </td>
                  <td>. REACT JS</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
        <div className="skills_plus">
          <h3>Les +</h3>
          <p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={icon_git} alt="git logo" />
                  </td>
                  <td>. GIT</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_github} alt="github logo" />
                  </td>
                  <td>. GIT-HUB</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_npm} alt="npm logo" />
                  </td>
                  <td>. NPM</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_gitlab} alt="gitlab logo" />
                  </td>
                  <td>. GITLAB</td>
                </tr>
                <tr>
                  <td>
                    <img src={icon_python} alt="python logo" />
                  </td>
                  <td>. PYTHON</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </section>
    </div>
  );
}
