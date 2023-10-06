import React from "react";
import styles from "./formContacts.module.css";
import Input from "../../atoms/input/input";
import ContactsTextAria from "../../atoms/contactsTextAria/contactsTextAria";
import Button from "../../atoms/button/button";
import useInput from "../../../hooks/useInput.jsx";
import { useForm } from "react-hook-form";

function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <Input
            {...register("name")}
            className={styles.namePosition}
            placeholder={"Ваше имя"}
          />

          <Input
            {...register("email", { required: true })}
            className={styles.emailPosition}
            placeholder={"Ваш e-mail"}
          />
        </div>

        <ContactsTextAria
          {...register("description")}
          className={styles.textAriaPosition}
          placeholder={"Что вас интересует?"}
          // cols={75}
          // rows={10}
        />

        {errors.emails && (
          <div style={{ color: "red" }}>Field email is required</div>
        )}

        <Button
          className={styles.formSubmitBtn}
          title={"ОТПРАВИТЬ"}
          onClick={handleSubmit(console.log)}
        />
      </form>
    </div>
  );
}

export default FormContacts;
