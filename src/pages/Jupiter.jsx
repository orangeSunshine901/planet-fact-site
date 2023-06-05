import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Jupiter = () => {
  return (
    <div>
      <Planets planet={4} size="jupiter" activeClass="jupiter-active-desktop" />
    </div>
  );
};

export default Jupiter;
