import React from "react";
import styles from "./sliderPagination.module.css";

export const SliderPagination = ({ currentNumber, countedAll, ...props }) => {
  return (
    <div className={[styles.sliderPaginaton, props.className].join(" ")}>
      {currentNumber < 10 ? `0${currentNumber}` : currentNumber} / <span className={styles.opacity}>0{countedAll}</span>
    </div>
  );
};
