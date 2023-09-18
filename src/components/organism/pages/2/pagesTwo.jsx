import React from "react";
import styles from "./pagesTwo.module.css";
import useWindowResize from "../../../../hooks/useWindowResize";
import VrPlanetariumDescription from "../../../molecules/vrPlanetariumDescription/vrPlanetariumDescription";
import VrSlider from "../../../atoms/vrSlider/vrSlider";
import Astronaut from "../../../../assets/img/Astronaut-in-space.png";

const PagesTwo = () => {
  const { width, height } = useWindowResize();
  const images = [
    { url: Astronaut, description: "Астронавт в космосе", index: "1" },
    { url: Astronaut, description: "Астронавт в космосе", index: "2" },
    { url: Astronaut, description: "Астронавт в космосе", index: "3" },
    { url: Astronaut, description: "Астронавт в космосе", index: "4" },
    { url: Astronaut, description: "Астронавт в космосе", index: "5" },
    { url: Astronaut, description: "Астронавт в космосе", index: "6" },
  ];

  return (
    <div
      className={
        width >= 1366
          ? styles.deskPagesTwoContainer
          : styles.mobPagesTwoContainer
      }
    >
      <div className={
        width >= 1366
          ? styles.deskPagesTwoContent
          : styles.mobPagesTwoContent
      }>
        <VrPlanetariumDescription />
        <VrSlider images={images} />
      </div>
    </div>
  );
};

export default PagesTwo;
