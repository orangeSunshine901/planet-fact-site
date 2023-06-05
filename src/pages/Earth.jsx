import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Earth = () => {
  return (
    <div>
      <Planets planet={2} size="earth" activeClass="earth-active-desktop" />
    </div>
  );
};

export default Earth;
