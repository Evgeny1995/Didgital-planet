import React from "react";
import vk from './../../../assets/svg/socials/vk.svg';
import facebook from './../../../assets/svg/socials/facebook.svg'
import styles from "./socials.module.css"

function Socials({...props}) {
  return (
    <div className={[styles.socialsMobMenu, props.className].join(" ")}>
       <img className={styles.socialsIcon}  src={facebook} alt="" /> 
       <img className={styles.socialsIcon} src={vk} alt="" />
    </div>
  );
}

export default Socials;