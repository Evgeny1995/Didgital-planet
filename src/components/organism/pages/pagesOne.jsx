import React, { useState } from "react";
import styles from "./pagesOne.module.css";
import Header from "./../../molecules/header/header.jsx";
import VrPlanetarium from "../../molecules/vrPlanetarium/vrPlanetarium.jsx";

function PagesOne() {
  return (
    <>
      <div>
        <div className={styles.planetariumBg}>
          <Header />
          <VrPlanetarium />
        </div>
      </div>
    </>
  );
}

export default PagesOne;
