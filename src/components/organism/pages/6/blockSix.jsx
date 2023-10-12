import React from "react";
import styles from "./blockSix.module.css";
import FormContacts from "../../../molecules/formContacts/formContacts";
import Contacts from "../../../molecules/contacts/contacts";

export default function BlockSix() {
  return (
    <div id={"contacts"} className={styles.pagesSixContainer}>
      <div className={styles.pagesSixContent}>
        <div className={styles.titleBorder}>
          <h2 className={styles.title}>Контакты</h2>
        </div>
        <div className={styles.pagesSixContactsFormPosition}>
          <Contacts />
          <FormContacts />
        </div>
      </div>
    </div>
  );
}
