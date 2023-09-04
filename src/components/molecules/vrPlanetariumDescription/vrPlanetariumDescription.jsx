import React from "react";
import styles from "./vrPlanetariumDescription.module.css";

const VrPlanetariumDescription = () => {
  return (
    <div className={styles.planetariumDescriptionContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Что такое
          <br className={styles.mobBr} /> VR-планетарий?
        </h2>
      </div>
      <div className={styles.content}>
        <p className={[styles.text, styles.text1Position].join(' ')}>
          Это образовательная программа, использующая технологию виртуальной
          реальности.
        </p>
        <p className={[styles.text, styles.text2Position].join(' ')}>
          Зрителям выдаются очки виртуальной реальности, оператор запускает
          сеанс планетария на всех очках одновременно. В коллекции фильмов идут
          обучающие картины о космосе, астрономии и обществознании.
        </p>
        <p className={[styles.text, styles.text3Position].join(' ')}>
          За счёт реалестичности и имитации игры такое обучение повышает
          мотивацию и стимулирует активную мозговую деятельность ребёнка.
        </p>
      </div>
    </div>
  );
};

export default VrPlanetariumDescription;
