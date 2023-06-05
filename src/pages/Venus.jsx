import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Venus = () => {
  return (
    <div>
      <Planets planet={1} size="venus" activeClass="venus-active-desktop" />
    </div>
  );
};

export default Venus;
