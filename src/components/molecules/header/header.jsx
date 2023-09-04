import React, { useState } from "react";
import logotype from "./../../../assets/svg/logo.svg";
import logotypeDesktop from "./../../../assets/svg/logoDesktop.svg";
import Button, { BUTTONS_VARIANT } from "./../../atoms/button/button.jsx";
import styles from "./header.module.css";
import MobBurgerMenuBtn from "../../atoms/mobBurgerMenuBtn/mobBurgerMenuBtn";
import useWindowResize from "../../hooks/useWindowResize";
import HeaderNav from "../../atoms/headerNav/headerNav";
import HeaderPhoneNamber from "../../atoms/headerPhoneNumber/headerPhoneNamber";
import Socials from "../../atoms/socials/socials";

function Header() {
  const menuMobLinks = [
    { value: "ГЛАВНАЯ", href: "#", index: "1" },
    { value: "О ПРОДУКТЕ", href: "#", index: "2" },
    { value: "КАК РАБОТАЕТ", href: "#", index: "3" },
    { value: "ТЕХНОЛОГИЯ", href: "#", index: "4" },
    { value: "ВОПРОСЫ", href: "#", index: "5" },
    { value: "КОНТАКТЫ", href: "#", index: "6" },
  ];

  const { width, height } = useWindowResize();
  const [burgerToogleActive, setBurgerToogleActive] = useState(false);

  return (
    <header className={styles.headerWrap}>
      <div
        className={
          burgerToogleActive
            ? [styles.header, styles.black].join(" ")
            : styles.header
        }
      >
        <img src={width >= 1366 ? logotypeDesktop : logotype} alt="" />

        {width >= 1366 && (
          <HeaderNav
            className={styles.headerNavPositionDesk}
            menuMobLinks={menuMobLinks}
          />
        )}

        <Button
          className={styles.buttonOrder}
          variant={BUTTONS_VARIANT.BTNSMALL}
          title={"ЗАКАЗАТЬ"}
        />
        <MobBurgerMenuBtn
          burgerToogleActive={burgerToogleActive}
          setBurgerToogleActive={setBurgerToogleActive}
          menuMobLinks={menuMobLinks}
        />
        {width >= 1366 && (
          <HeaderPhoneNamber className={styles.deskMenuPositionPhone} />
        )}
      </div>

      <div
        className={
          burgerToogleActive
            ? [styles.mobHederNavMenu, styles.mobHederNavMenuActive].join(" ")
            : styles.mobHederNavMenu
        }
      >
        <HeaderNav
          className={styles.headerNavPositionMob}
          menuMobLinks={menuMobLinks}
        />
        <div className={styles.line}></div>
        <HeaderPhoneNamber className={styles.mobMenuPositionPhone} />
        <Socials className={styles.socialsMobMenuPosition} />
      </div>
    </header>
  );
}

//
export default Header;
