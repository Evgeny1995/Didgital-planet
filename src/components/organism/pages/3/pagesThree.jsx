import React from "react";
import styles from "./pagesThree.module.css";
import HowItWorkDesk from "../../../atoms/howItsWork/howItsWork";

const PagesThree = () => {
  return (
    <div className={styles.deskPagesthreeContainer}>
      <div className={styles.deskPagesthreeContent}>
        <div className={styles.titleBodrer}>
          <h2 className={styles.title}>Как это работает?</h2>
        </div>
        <HowItWorkDesk/>
      </div>
    </div>
  );
};

export default PagesThree;
