import React, { useState } from "react";
import logotype from "./../../../assets/svg/logo.svg";
import Button, { BUTTONS_VARIANT } from "./../../atoms/button/button.jsx";
import styles from "./header.module.css";
import MobBurgerMenu from "../../atoms/mobBurgerMenu/mobBurgerMenu";

function Header() {
  const menuMobLinks = [
    { value: "ГЛАВНАЯ", href: "#" },
    { value: "О ПРОДУКТЕ", href: "#" },
    { value: "КАК РАБОТАЕТ", href: "#" },
    { value: "ТЕХНОЛОГИЯ", href: "#" },
    { value: "ВОПРОСЫ", href: "#" },
    { value: "КОНТАКТЫ", href: "#" },
  ];

  const [burgerToogleActive, setBurgerToogleActive] = useState(false);

  return (
    <header
      className={
        burgerToogleActive
          ? [styles.headerWrap, styles.black].join(" ")
          : styles.headerWrap
      }
    >
      <div className={styles.header}>
        <img className="logo" src={logotype} alt="Логотип" />
        <Button variant={BUTTONS_VARIANT.BTNSMALL} title={"Заказать"} />
        <MobBurgerMenu
          burgerToogleActive={burgerToogleActive}
          setBurgerToogleActive={setBurgerToogleActive}
          menuMobLinks={menuMobLinks}
        />
      </div>
    </header>
  );
}

export default Header;
