import React from "react";
import styles from "./headerNav.module.css";

const HeaderNav = ({ menuMobLinks, ...props }) => {
  return (
    <ul className={[styles.mobMenuList, props.className].join(" ")}>
      {menuMobLinks.map((menuMobLink) => (
        <li key={menuMobLink.index} className={styles.mobMenuItems}>
          <a className={styles.mobMenuLinks} href={menuMobLink.href}>
            {menuMobLink.value}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
