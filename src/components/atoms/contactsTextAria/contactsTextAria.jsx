import React, { forwardRef } from "react";
import styles from "./contactsTextAria.module.css";

const ContactsTextAria = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <textarea
        ref={ref}
        className={styles.textarea}
        // cols={props.cols}
        // rows={props.rows}
        // {...props}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
});

export default ContactsTextAria;
