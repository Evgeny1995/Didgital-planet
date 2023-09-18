import React from "react";
import styles from "./formContacts.module.css";
import Input from "../../atoms/input/input";
import ContactsTextAria from "../../atoms/contactsTextAria/contactsTextAria";
import Button from "../../atoms/button/button";

function FormContacts() {
  return (
    <div className={styles.formContactsContainer}>
      <h4 className={styles.formContactsTitle}>
        Остались вопросы? Задайте их нам!
      </h4>
      <p className={styles.formContactsText}>
        Мы обязательно свяжемся с вами в течение двух рабочих дней
      </p>
      <form action="">
        <div className={styles.deskPosition}>
        <Input className={styles.namePosition} placeholder={"Ваше имя"} />
        <Input className={styles.emailPosition} placeholder={"Ваш e-mail"} />
        </div>
        <ContactsTextAria
          className={styles.textAriaPosition}
          placeholder={"Что вас интересует?"}
        />
        <Button className={styles.formSubmitBtn} title={"ОТПРАВИТЬ"} />
      </form>
    </div>
  );
}

export default FormContacts;
