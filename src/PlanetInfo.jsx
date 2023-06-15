// This is component is for the mobile planet description
import mercuryPlanet from "./assets/planet-mercury.svg";
import mercuryInternal from "./assets/planet-mercury-internal.svg";
import mercuryGeology from "./assets/geology-mercury.webp";
import venusPlanet from "./assets/planet-venus.svg";
import venusInternal from "./assets/planet-venus-internal.svg";
import venusGeology from "./assets/geology-venus.webp";
import earthPlanet from "./assets/planet-earth.svg";
import earthInternal from "./assets/planet-earth-internal.svg";
import earthGeology from "./assets/geology-earth.webp";
import marsPlanet from "./assets/planet-mars.svg";
import marsInternal from "./assets/planet-mars-internal.svg";
import marsGeology from "./assets/geology-mars.webp";
import jupiterPlanet from "./assets/planet-jupiter.svg";
import jupiterInternal from "./assets/planet-jupiter-internal.svg";
import jupiterGeology from "./assets/geology-jupiter.webp";
import saturnPlanet from "./assets/planet-saturn.svg";
import saturnInternal from "./assets/planet-saturn-internal.svg";
import saturnGeology from "./assets/geology-saturn.webp";
import uranusPlanet from "./assets/planet-uranus.svg";
import uranusInternal from "./assets/planet-uranus-internal.svg";
import uranusGeology from "./assets/geology-uranus.webp";
import neptunePlanet from "./assets/planet-neptune.svg";
import neptuneInternal from "./assets/planet-neptune-internal.svg";
import neptuneGeology from "./assets/geology-neptune.webp";

import data from "./data";

let planetImages = [
  {
    planet: mercuryPlanet,
    internal: mercuryInternal,
    geology: mercuryGeology,
  },
  {
    planet: venusPlanet,
    internal: venusInternal,
    geology: venusGeology,
  },
  {
    planet: earthPlanet,
    internal: earthInternal,
    geology: earthGeology,
  },
  {
    planet: marsPlanet,
    internal: marsInternal,
    geology: marsGeology,
  },
  {
    planet: jupiterPlanet,
    internal: jupiterInternal,
    geology: jupiterGeology,
  },
  {
    planet: saturnPlanet,
    internal: saturnInternal,
    geology: saturnGeology,
  },
  {
    planet: uranusPlanet,
    internal: uranusInternal,
    geology: uranusGeology,
  },
  {
    planet: neptunePlanet,
    internal: neptuneInternal,
    geology: neptuneGeology,
  },
];

const PlanetInfo = ({ planet, size, overview, structure, surface }) => {
  if (overview) {
    return (
      <>
        <div className="planet-image">
          <img
            alt={data.name}
            className={size}
            src={planetImages[planet].planet}
          ></img>
        </div>
        <div className="planet-info">
          <div className="planet-info-text">
            <h1>{data[planet].name}</h1>
            <p className="planet-text">{data[planet].overview.content}</p>
            <div className="source-link">
              <p className="source-text">Source : </p>
              <a href={data[planet].overview.source}>Wikipedia</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Planet info based on the toggle selection

  if (structure) {
    return (
      <>
        <div className="planet-image">
          <img
            alt={`${data.name}-structure`}
            className={size}
            src={planetImages[planet].internal}
          ></img>
        </div>
        <div className="planet-info">
          <div className="planet-info-text">
            <h1>{data[planet].name}</h1>
            <p className="planet-text">{data[planet].structure.content}</p>
            <div className="source-link">
              <p className="source-text">Source :</p>
              <a href={data[planet].structure.source}>Wikipedia</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (surface) {
    return (
      <>
        <div className="planet-image">
          <img
            alt={data.name}
            className={size}
            src={planetImages[planet].planet}
          ></img>
          <img
            alt={`${data.name}-surface structure`}
            className="geology-img"
            src={planetImages[planet].geology}
          ></img>
        </div>
        <div className="planet-info">
          <div className="planet-info-text">
            <h1>{data[planet].name}</h1>
            <p className="planet-text">{data[planet].geology.content}</p>
            <div className="source-link">
              <p className="source-text">Source :</p>
              <a href={data[planet].geology.source}>Wikipedia</a>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PlanetInfo;
