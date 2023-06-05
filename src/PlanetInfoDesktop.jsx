// This is component is for the desktop planet description

import data from "./data.json";

const PlanetInfoDesktop = ({ planet, size, overview, structure, surface }) => {
  if (overview) {
    return (
      <>
        <div className="planet-image">
          <img className={size} src={data[planet].images.planet}></img>
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
          <img className={size} src={data[planet].images.internal}></img>
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
          <img className={size} src={data[planet].images.planet}></img>
          <img className="geology-img" src={data[planet].images.geology}></img>
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

export default PlanetInfoDesktop;
