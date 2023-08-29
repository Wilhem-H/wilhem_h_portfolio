import "./Footer.css";
import githubSvg from "../assets/githubWhiteSvg.svg";
import linkedinSvg from "../assets/linkedinWhiteSvg.svg";
import mailSvg from "../assets/mailWhiteSvg.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-image">
        <img src="" />
        <h2>My Logo here</h2>
      </div>
      <div className="footer-text">
        <div>
          <p>Hafsa Wilhem</p>
          <p>wilhem.hafsa@hotmail.fr</p>
          <p>Wilhem-H - Git-hub</p>
        </div>
      </div>
      <div className="footer-logo">
        <div>Liens : </div>
        <div>
          <img src={githubSvg} />
          <img src={linkedinSvg} />
          <img src={mailSvg} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
