import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <section className="skills_content">
        <div className="skills_backAndbdd">
          <div className="skills_back">
            <h3>Back-End</h3>
            <p>
              Node JS <br /> Express JS
              <br /> TYPESCRIPT
            </p>
          </div>
          <div className="skills_bdd">
            <h3>Base de données</h3>
            <p>
              MYSQL <br /> SQL WORKBENCH
              <br /> SQLite
            </p>
          </div>
        </div>
        <div className="skills_front">
          <h3>Front-End</h3>
          <p>
            HTML 5 <br /> CSS 3<br /> JAVASCRIPT <br /> TYPESCRIPT <br /> REACT
            JS
          </p>
        </div>
        <div className="skills_plus">
          <h3>Les +</h3>
          <p>
            GIT <br /> GIT-HUB
            <br /> NPM <br /> GITLAB <br /> PYTHON
          </p>
        </div>
      </section>
    </div>
  );
}
