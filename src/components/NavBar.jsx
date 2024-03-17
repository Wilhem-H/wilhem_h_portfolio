import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";
import WilhemLogo from "../assets/Wilhem_Logo2.png";
import { DarkModeToggle } from "./DarkModeToggle";
import "./NavBar.css";

function Navbar({ isDark, setIsDark }) {
  const [openMenu, setOpenMenu] = useState("false");

  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

  const handleClick = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/download-cv`
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      URL.revokeObjectURL(url);
    } catch (erreur) {
      console.error(
        `Une erreur s'est produite lors de la récupération du cv. ${erreur}`
      );
      toast.error(
        "Oups, il y a un problème... 😧, contactez moi directement sur linkedin pour obtenir mon cv ",
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  return (
    <div className="my_navbar">
      <div
        className={
          openMenu ? "overlay_menu_mobile" : "overlay_menu_mobile open"
        }
      />
      <nav className="navbar_nav">
        <div
          className="navbar_burger"
          onClick={openMenuMobile}
          onKeyDown={(event) => {
            if (event.key === "'Enter' || event.key === ' '") {
              openMenuMobile();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <img className="logo" src={WilhemLogo} alt="my logo" />

        <div className={openMenu ? "navbar" : "navbar open"}>
          <div className="links">
            <div
              className="navbar_burger_close"
              onClick={openMenuMobile}
              onKeyDown={(event) => {
                if (event.key === "'Enter' || event.key === ' '") {
                  openMenuMobile();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="navLink">
              <div
                className="navbar_link "
                onClick={openMenuMobile}
                onKeyDown={(event) => {
                  if (event.key === "'Enter' || event.key === ' '") {
                    openMenuMobile();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <a href="#myPresentation" className="purple">
                  Présentation
                </a>
              </div>

              <div
                className="navbar_link "
                onClick={openMenuMobile}
                onKeyDown={(event) => {
                  if (event.key === "'Enter' || event.key === ' '") {
                    openMenuMobile();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <a href="#myProjects" className="green">
                  Projets
                </a>
              </div>

              <div
                className="navbar_link "
                onClick={openMenuMobile}
                onKeyDown={(event) => {
                  if (event.key === "'Enter' || event.key === ' '") {
                    openMenuMobile();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <a href="#myExperiences" className="purple">
                  Expériences
                </a>
              </div>

              <div
                className="navbar_link"
                onClick={openMenuMobile}
                onKeyDown={(event) => {
                  if (event.key === "'Enter' || event.key === ' '") {
                    openMenuMobile();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <a href="#myContactDetails" className="green">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <DarkModeToggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

        <div className="cv">
          <Tooltip
            title="Pensez à désactiver votre bloqueur de pub "
            followCursor
          >
            <button type="button" onClick={handleClick}>
              CV
            </button>
          </Tooltip>
          <p>Dowload it!</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  setIsDark: PropTypes.func,
  isDark: PropTypes.bool,
};
