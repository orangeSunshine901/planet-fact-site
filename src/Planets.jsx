import { useState } from "react";
import Stats from "./Stats";
import PlanetInfo from "./PlanetInfo";
import PlanetInfoDesktop from "./PlanetInfoDesktop";

const Planets = (props) => {
  // These states keep track of the toggle for mobile planet description

  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  // This prop is for the different toggle colors of the planets which are set to active based on the user click for Desktop.
  const activeClass = props.activeClass;

  // These functions are for the toggle functionality for mobile toggle menu.
  function toggleOverview() {
    const toggleBtnsMobile = document.querySelectorAll(
      "div.mobile-page-toggle > button"
    );

    const toggleBtnsDesktop = document.querySelectorAll(
      "div.page-toggle-desktop > button"
    );

    if (
      toggleBtnsMobile[0].classList != "mercury-active" ||
      toggleBtnsDesktop != activeClass
    ) {
      toggleBtnsMobile[0].classList.add("mercury-active");
      toggleBtnsDesktop[0].classList.add(activeClass);
      toggleBtnsMobile[1].classList.remove("mercury-active");
      toggleBtnsDesktop[1].classList.remove(activeClass);
      toggleBtnsMobile[2].classList.remove("mercury-active");
      toggleBtnsDesktop[2].classList.remove(activeClass);
      setOverview(true);
      setStructure(false);
      setSurface(false);
    }
  }
  function toggleStructure() {
    const toggleBtnsMobile = document.querySelectorAll(
      "div.mobile-page-toggle > button"
    );

    const toggleBtnsDesktop = document.querySelectorAll(
      "div.page-toggle-desktop > button"
    );

    if (
      toggleBtnsMobile[1].classList != "mercury-active" ||
      toggleBtnsDesktop[1].classList != activeClass
    ) {
      toggleBtnsMobile[1].classList.add("mercury-active");
      toggleBtnsDesktop[1].classList.add(activeClass);
      toggleBtnsMobile[0].classList.remove("mercury-active");
      toggleBtnsDesktop[0].classList.remove(activeClass);
      toggleBtnsMobile[2].classList.remove("mercury-active");
      toggleBtnsDesktop[2].classList.remove(activeClass);
      setStructure(true);
      setOverview(false);
      setSurface(false);
    }
  }
  function toggleSurface() {
    const toggleBtnsMobile = document.querySelectorAll(
      "div.mobile-page-toggle > button"
    );

    const toggleBtnsDesktop = document.querySelectorAll(
      "div.page-toggle-desktop > button"
    );

    if (
      toggleBtnsMobile[2].classList != "mercury-active" ||
      toggleBtnsDesktop[2].classLisg != activeClass
    ) {
      toggleBtnsMobile[2].classList.add("mercury-active");
      toggleBtnsDesktop[2].classList.add(activeClass);
      toggleBtnsMobile[0].classList.remove("mercury-active");
      toggleBtnsDesktop[0].classList.remove(activeClass);
      toggleBtnsMobile[1].classList.remove("mercury-active");
      toggleBtnsDesktop[1].classList.remove(activeClass);
      setSurface(true);
      setOverview(false);
      setStructure(false);
    }
  }
  return (
    <div>
      <div className="mobile-page-toggle">
        <button className="mercury-active" onClick={toggleOverview}>
          Overview
        </button>
        <button onClick={toggleStructure}>Structure</button>
        <button onClick={toggleSurface}>Surface</button>
      </div>
      <div className="planet-section">
        {/* The planet, Toggle state, Size of the planet are passed down as props. */}
        <PlanetInfo
          planet={props.planet}
          overview={overview}
          structure={structure}
          surface={surface}
          size={props.size}
        />
      </div>
      <div className="planet-section-desktop">
        {/* This is the Planet Info section for desktop. */}
        <PlanetInfoDesktop
          planet={props.planet}
          overview={overview}
          structure={structure}
          surface={surface}
          size={props.size}
        />
        {/* Desktop toggle menu */}
        <div className="page-toggle-desktop">
          <button onClick={toggleOverview} className={activeClass}>
            <p>
              <span>01</span>Overview
            </p>
          </button>
          <button onClick={toggleStructure}>
            <p>
              <span>02</span>Internal Structure
            </p>
          </button>
          <button onClick={toggleSurface}>
            <p>
              <span>03</span>Surface Geology
            </p>
          </button>
        </div>
      </div>
      {/* Planet stats section for both Mobile and Desktop */}
      <Stats planet={props.planet}></Stats>
    </div>
  );
};

export default Planets;
