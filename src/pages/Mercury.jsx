import { useState } from "react";
import Planets from "../Planets";

const Mercury = () => {
  return (
    <div>
      <Planets planet={0} size="mercury" activeClass="mercury-active-desktop" />
    </div>
  );
};

export default Mercury;
