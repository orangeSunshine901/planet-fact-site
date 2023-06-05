import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Mars = () => {
  return (
    <div>
      <Planets planet={3} size="mars" activeClass="mars-active-desktop" />
    </div>
  );
};

export default Mars;
