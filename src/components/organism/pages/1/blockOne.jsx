import React, { useState } from "react";
import styles from "./blockOne.module.css";
import VrPlanetarium from "../../../molecules/vrPlanetarium/vrPlanetarium";
import useWindowResize from "../../../../hooks/useWindowResize";

function BlockOne() {
  const { width, height } = useWindowResize();
  return (
    <div>
      <div
        id={"main"}
        className={
          width >= 1366 ? styles.planetariumBgDesk : styles.planetariumBgMob
        }
      >
        <VrPlanetarium />
      </div>
    </div>
  );
}

export default BlockOne;
