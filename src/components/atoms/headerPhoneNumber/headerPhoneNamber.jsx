import React from "react";
import styles from "./headerPhoneNamber.module.css";

const HeaderPhoneNamber = ({ ...props }) => {
  return (
    <div className={props.className}>
      <p className={styles.phoneNamber}>8 (800) 555 35 75</p>
    </div>
  );
};

export default HeaderPhoneNamber;
