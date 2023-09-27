import React from "react";
import styles from "./contactsTextAria.module.css";

function ContactsTextAria({ ...props }) {
  return (
    <div className={props.className}>
      <textarea
        className={styles.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}

export default ContactsTextAria;
