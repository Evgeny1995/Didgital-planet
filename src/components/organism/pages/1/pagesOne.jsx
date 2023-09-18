import React, { useState } from "react";
import styles from "./pagesOne.module.css";
import Header from "./../../../molecules/header/header"
import VrPlanetarium from "../../../molecules/vrPlanetarium/vrPlanetarium";
import useWindowResize from "../../../../hooks/useWindowResize";

function PagesOne() {
  const { width, height } = useWindowResize();
  return (
    <>
      <div>
        <div
          className={
            width >= 1366 ? styles.planetariumBgDesk : styles.planetariumBgMob
          }
        >
          <Header />
          <VrPlanetarium />
        </div>
      </div>
    </>
  );
}

export default PagesOne;
