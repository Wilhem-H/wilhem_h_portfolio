import PropTypes from "prop-types";
import darkMode from "../assets/icons/darkMode.png";
import lightMode from "../assets/icons/lightMode.png";
import "./DarkModeToggle.css";

export const DarkModeToggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle_container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        <img src={isChecked ? lightMode : darkMode} />
      </label>
    </div>
  );
};

DarkModeToggle.propTypes = {
  handleChange: PropTypes.func,
  isChecked: PropTypes.bool,
};
