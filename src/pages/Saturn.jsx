import PlanetInfo from "../PlanetInfo";
import Stats from "../Stats";
import { useState } from "react";
import Planets from "../Planets";

const Saturn = () => {
  return (
    <div>
      <Planets planet={5} size="saturn" activeClass="saturn-active-desktop" />
    </div>
  );
};

export default Saturn;
