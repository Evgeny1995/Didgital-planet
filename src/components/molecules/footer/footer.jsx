import React from "react";
import styles from "./footer.module.css";
import Socials from "../../atoms/socials/socials";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Digital Planet, 2019</p>
      <p className={styles.rights}>
        Детский VR планетарий. Все права защищены.
      </p>
      <Socials />
    </footer>
  );
}

export default Footer;
