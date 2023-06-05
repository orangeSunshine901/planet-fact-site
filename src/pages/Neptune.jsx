import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Neptune = () => {
  return (
    <div>
      <Planets planet={7} size="neptune" activeClass="neptune-active-desktop" />
    </div>
  );
};

export default Neptune;
