import React, { useState } from "react";
import styles from "./mobBurgerMenu.module.css";
import burgerOpen from "./../../../assets/svg/burgerMob/menuOpen.svg";
import burgerClose from "./../../../assets/svg/burgerMob/menuClose.svg";
import Socials from "../socials/socials";

function MobBurgerMenu({ menuMobLinks, burgerToogleActive ,setBurgerToogleActive }) {
  

  return (
    <div>
      <div onClick={() => setBurgerToogleActive(!burgerToogleActive)}>
        {burgerToogleActive ? (
          <img className={styles.burgerSvg} src={burgerClose} alt="" />
        ) : (
          <img className={styles.burgerSvg} src={burgerOpen} alt="" />
        )}
      </div>

      <div
        className={
          burgerToogleActive
            ? [styles.mobMenu, styles.activeMobMenu].join(" ")
            : [styles.mobMenu]
        }
      >
        <ul className={styles.mobMenuList}>
          {menuMobLinks.map((menuMobLink) => (
            <li className={styles.mobMenuItems}>
              <a className={styles.mobMenuLinks} href={menuMobLink.href}>
                {menuMobLink.value}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.line}></div>
        <div className={styles.contactMobMenu}>
          <p className={styles.phoneNamber}>8 (800) 555 35 75</p>
          <Socials/>
        </div>
        
      </div>
    </div>
  );
}

export default MobBurgerMenu;
