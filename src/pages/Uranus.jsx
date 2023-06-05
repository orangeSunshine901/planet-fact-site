import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Uranus = () => {
  return (
    <div>
      <Planets planet={6} size="uranus" activeClass="uranus-active-desktop" />
    </div>
  );
};

export default Uranus;
