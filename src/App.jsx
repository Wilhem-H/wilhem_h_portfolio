import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "use-local-storage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import NavBar from "./components/NavBar";

import Introduce from "./components/Introduce";
import Caroussel from "./components/Caroussel";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    const links = document.querySelectorAll(".navbar_link a");

    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        duration: 800,
      });
    }
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <Introduce id="myPresentation" />
      <Caroussel id="myProjects" />
      <Experiences id="myExperiences" />
      <Skills />
      <Contact id="myContactDetails" />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
