import { useState } from "react";
import Planets from "../Planets";

const Mercury = () => {
  return (
    <div>
      <Planets
        planet={0}
        size="mercury"
        activeClass="mercury-active-desktop"
        mobileActiveClass="mercury-active"
      />
    </div>
  );
};

export default Mercury;
