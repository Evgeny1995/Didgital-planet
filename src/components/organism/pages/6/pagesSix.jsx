import React from "react";
import styles from "./pagesSix.module.css";
import Contacts from "../../../atoms/contacts/contacts";
import FormContacts from "../../../molecules/formContacts/formContacts";
import Footer from "../../../molecules/footer/footer";

export default function PagesSix() {
  return (
    <div className={styles.pagesSixContainer}>
      <div className={styles.pagesSixContent}>
        <div className={styles.titleBorder}>
          <h2 className={styles.title}>Контакты</h2>
        </div>
        <div className={styles.pagesSixContactsFormPosition}>
          <Contacts />
          <FormContacts />
        </div>
        <Footer />
      </div>
    </div>
  );
}
