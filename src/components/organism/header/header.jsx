import React, { useState } from "react";
import logotype from "../../../assets/svg/logo.svg";
import logotypeDesktop from "./../../../assets/svg/logoDesktop.svg";
import Button, { BUTTONS_VARIANT } from "./../../atoms/button/button.jsx";
import styles from "./header.module.css";
import MobBurgerMenuBtn from "../../atoms/mobBurgerMenuBtn/mobBurgerMenuBtn";
import useWindowResize from "../../../hooks/useWindowResize";
import HeaderNav from "../../molecules/headerNav/headerNav.jsx";
import HeaderPhoneNamber from "../../atoms/headerPhoneNumber/headerPhoneNamber";
import Socials from "../../atoms/socials/socials";
import Modal from "../../molecules/modal/modal.jsx";

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
  const [activeModal, setActiveModal] = useState(false);

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
          onClick={() => setActiveModal(!activeModal)}
          onChange={() => console.log(activeModal)}
          className={styles.buttonOrder}
          variant={BUTTONS_VARIANT.BTNSMALL}
          title={"ЗАКАЗАТЬ"}
        />
        <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
        <MobBurgerMenuBtn
          burgerToogleActive={burgerToogleActive}
          setBurgerToogleActive={setBurgerToogleActive}
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
