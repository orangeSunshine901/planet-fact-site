// This is component is for the mobile planet description

import data from "./data";

let Planetimages = [
  {
    planet: "./assets/planet-mercury.svg",
    internal: "./assets/planet-mercury-internal.svg",
    geology: "./assets/geology-mercury.png",
  },
  {
    planet: "./assets/planet-venus.svg",
    internal: "./assets/planet-venus-internal.svg",
    geology: "./assets/geology-venus.png",
  },
  {
    planet: "./assets/planet-earth.svg",
    internal: "./assets/planet-earth-internal.svg",
    geology: "./assets/geology-earth.png",
  },
  {
    planet: "./assets/planet-mars.svg",
    internal: "./assets/planet-mars-internal.svg",
    geology: "./assets/geology-mars.png",
  },
  {
    planet: "./assets/planet-jupiter.svg",
    internal: "./assets/planet-jupiter-internal.svg",
    geology: "./assets/geology-jupiter.png",
  },
  {
    planet: "./assets/planet-saturn.svg",
    internal: "./assets/planet-saturn-internal.svg",
    geology: "./assets/geology-saturn.png",
  },
  {
    planet: "./assets/planet-uranus.svg",
    internal: "./assets/planet-uranus-internal.svg",
    geology: "./assets/geology-uranus.png",
  },
  {
    planet: "./assets/planet-neptune.svg",
    internal: "./assets/planet-neptune-internal.svg",
    geology: "./assets/geology-neptune.png",
  },
];

const PlanetInfo = ({ planet, size, overview, structure, surface }) => {
  if (overview) {
    return (
      <>
        <div className="planet-image">
          <img className={size} src={Planetimages[planet].planet}></img>
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
          <img className={size} src={Planetimages[planet].internal}></img>
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
          <img className={size} src={Planetimages[planet].planet}></img>
          <img className="geology-img" src={Planetimages[planet].geology}></img>
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
