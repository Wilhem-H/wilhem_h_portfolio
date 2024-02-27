import "./Footer.css";
import githubSvg from "../assets/githubWhiteSvg.svg";
import linkedinSvg from "../assets/linkedinWhiteSvg.svg";
import mailSvg from "../assets/mailWhiteSvg.svg";
import logoFooter from "../assets/logo_footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-image">
        <img src={logoFooter} alt="my personnal logo" />
      </div>
      <div className="footer-text">
        <div>
          <p>Hafsa Wilhem</p>
          <p>wilhem.hafsa@hotmail.fr</p>
          <p>GitHub : Wilhem-H</p>
        </div>
      </div>
      <div className="footer-logo">
        <div>Liens : </div>
        <div>
          <a href=" https://github.com/Wilhem-H" target="_blank">
            <img src={githubSvg} alt="my github account" />
          </a>

          <a href=" https://www.linkedin.com/in/wilhem-hafsa/" target="_blank">
            <img src={linkedinSvg} alt="my linkedin account" />
          </a>

          <a href=" mailto:wilhem.hafsa@outlook.fr" target="_blank">
            <img src={mailSvg} alt="my mail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
