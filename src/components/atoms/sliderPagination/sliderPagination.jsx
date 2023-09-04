import React from "react";
import styles from './sliderPagination.module.css'


export const SliderPagination = ({ currentNumber, countedAll }) => {
  return (
    <div className={styles.sliderPaginaton}>
      {currentNumber < 10 ? `0${currentNumber}` : currentNumber} / 0{countedAll}
    </div>
  );
};
