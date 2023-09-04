import React from "react";
import styles from "./pagesSix.module.css";
import Contacts from "../../../atoms/contacts/contacts";
import FormContacts from "../../../molecules/formContacts/formContacts";
import Socials from "../../../atoms/socials/socials";

export default function PagesSix() {
  return (
    <div className={styles.pagesSixContainer}>
      <div className={styles.pagesSixContent}>
        <div className={styles.titleBorder}>
          <h2 className={styles.title}>Контакты</h2>
        </div>
        <div className={styles.pagesSixContactsFormPosition}>
          <Contacts />
          <FormContacts/>
        </div>
        <footer className={styles.footer}>
            <p className={styles.copyright}>© Digital Planet, 2019</p>
            <p className={styles.rights}>Детский VR планетарий. Все права защищены.</p>
          <Socials/>
        </footer>
      </div>
    </div>
  );
}
