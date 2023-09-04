import React from "react";
import styles from "./vrPlanetarium.module.css";
import Button, { BUTTONS_VARIANT } from "../../atoms/button/button.jsx";
import ticket from "./../../../assets/svg/button-svg/Ticket.svg"
import video from "./../../../assets/svg/button-svg/Video.svg"
import useWindowResize from "./../../hooks/useWindowResize"
import Socials from "../../atoms/socials/socials";

function VrPlanetarium() {
  const { width, height } = useWindowResize();
  return (
    <>
      <div className={styles.vrPlanetarium}>
        <h1 className={styles.title}>Didgital Planet VR</h1>
        <p className={styles.text}>
          Образовательный виртуальный планетарий в Новороссийске. Познавательное
          приключение в мир звёзд и галактик.
        </p>
        
        <div className={styles.btnOrderContainer}>
          <Button
            className={styles.btn}
            variant={BUTTONS_VARIANT.BTNBIG} 
            icon={<img src={ticket} alt="" />}
            title={"ЗАКАЗАТЬ"} 
          />
          
          <Button 
            className={styles.btn}
            variant={BUTTONS_VARIANT.BTNBIGTRANSPARENT} 
            icon={<img src={video} alt="" />}  
            title={"ВИДЕО"} 
          />
        </div>
        {width >= 1366 && <Socials className={styles.socialPositionDesk}/>}
      </div>
    </>
  );
}

export default VrPlanetarium;
