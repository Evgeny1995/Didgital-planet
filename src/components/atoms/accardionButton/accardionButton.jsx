import React from "react";
import styles from "./accardionButton.module.css"
import icon from './../../../assets/svg/accardion/open.svg'

export default function AccardionButton({faqItem, clickHandler, id, openId} ) {
  
    return (
    <button
      className={styles.accardionButton}
      onClick={() => clickHandler(id)}
    >
      <p className={styles.accardionTitle}>{faqItem.title}</p>
      <div className={styles.accardionButtonSvgContainer}><img className={
              id === openId
                ? styles.rotateIconOpen
                : styles.rotateIconClose
            } src={icon} alt="" /></div>
    </button>
  );
}
