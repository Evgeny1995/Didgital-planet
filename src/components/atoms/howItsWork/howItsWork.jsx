import React from "react";
import styles from "./howItsWork.module.css";
import image1 from "./../../../assets/img/page3/photo1.png";
import image2 from "./../../../assets/img/page3/photo2.png";
import image3 from "./../../../assets/img/page3/photo3.png";
import image4 from "./../../../assets/img/page3/photo4.png";
import clsx from "clsx";

const HowItWorkDesk = ({howItWorkListData}) => {
  return (
    <ul className={styles.howItsWorkList}>
      {howItWorkListData.map((item) => (
        <li key={item.id} className={clsx(styles.howItsWorkItem, item.classNames)}>
          <div className={styles.howItsWorkImgContainer}>
            <div className={styles.greenBorder}></div>
            <div className={styles.imgNumber}>{item.id}</div>
            <img
              className={styles.howItsWorkImg}
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className={styles.howItsWorkTextContainer}>
            <h4 className={styles.howItsWorkTitle}>{item.title}</h4>
            <p className={styles.howItsWorkText}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HowItWorkDesk;
