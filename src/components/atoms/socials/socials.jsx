import React from "react";
import vk from './../../../assets/svg/socials/vk.svg';
import facebook from './../../../assets/svg/socials/facebook.svg'
import styles from "./socials.module.css"

function Socials() {
  return (
    <div className={styles.socialsMobMenu}>
       <img className={styles.socialsIcon}  src={facebook} alt="" /> 
       <img className={styles.socialsIcon} src={vk} alt="" />
    </div>
  );
}

export default Socials;