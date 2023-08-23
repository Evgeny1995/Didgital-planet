import React from "react";
import styles from "./vrPlanetarium.module.css";
import Button, { BUTTONS_VARIANT } from "../../atoms/button/button.jsx";

function VrPlanetarium() {
  return (
    <>
      <div className={styles.vrPlanetarium}>
        <h1 className={styles.title}>Didgital Planet VR</h1>
        <p className={styles.text}>
          Образовательный виртуальный планетарий в Новороссийске. Познавательное
          приключение в мир звёзд и галактик.
        </p>
        <div className={styles.btnOrderContainer}>
          <Button variant={BUTTONS_VARIANT.BTNBIG} title={"Заказать"} />
        </div>
        <div className={styles.btnVideoContainer}>
          <Button variant={BUTTONS_VARIANT.BTNBIGTRANSPARENT} title={"Видео"} />
        </div>
      </div>
    </>
  );
}

export default VrPlanetarium;
