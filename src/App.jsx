import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
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
    <div className="App">
      <NavBar />
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
