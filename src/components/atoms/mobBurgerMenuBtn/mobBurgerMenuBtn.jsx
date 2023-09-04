import React, { useState } from "react";
import styles from "./mobBurgerMenuBtn.module.css";
import burgerOpen from "./../../../assets/svg/burgerMob/menuOpen.svg";
import burgerClose from "./../../../assets/svg/burgerMob/menuClose.svg";

function MobBurgerMenuBtn({ burgerToogleActive, setBurgerToogleActive }) {
  return (
    <div className={styles.mobBurgerContainer}>
      <div onClick={() => setBurgerToogleActive(!burgerToogleActive)}>
        {burgerToogleActive ? (
          <img className={styles.burgerSvg} src={burgerClose} alt="" />
        ) : (
          <img className={styles.burgerSvg} src={burgerOpen} alt="" />
        )}
      </div>
    </div>
  );
}

export default MobBurgerMenuBtn;
