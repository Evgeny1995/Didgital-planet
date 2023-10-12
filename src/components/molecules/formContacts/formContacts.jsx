import React from "react";
import styles from "./formContacts.module.css";
import Input from "../../atoms/input/input";
import ContactsTextAria from "../../atoms/contactsTextAria/contactsTextAria";
import Button from "../../atoms/button/button";
import { useForm } from "react-hook-form";

function FormContacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    reset();
  };

  return (
    <div className={styles.formContactsContainer}>
      <h4 className={styles.formContactsTitle}>
        Остались вопросы? Задайте их нам!
      </h4>

      <p className={styles.formContactsText}>
        Мы обязательно свяжемся с вами в течение двух рабочих дней
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.deskPosition}>
          <div className={styles.inpContainer}>
            {errors?.name && (
              <div className={styles.errorStyle}>{errors.name.message}</div>
            )}
            <Input
              {...register("name", {
                required: "Name is require field!",
                minLength: {
                  value: 3,
                  message: "Please enter at least 3 characters!",
                },
              })}
              className={styles.namePosition}
              placeholder={"Ваше имя"}
              type="text"
            />
          </div>
          <div className={styles.inpContainer}>
            {errors?.email && (
              <div className={styles.errorStyle}>{errors.email.message}</div>
            )}
            <Input
              {...register("email", {
                required: "Please enter valid email!",
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: "Please enter valide email!",
                },
              })}
              className={styles.emailPosition}
              placeholder={"Ваш e-mail"}
              type={"text"}
            />
          </div>
        </div>

        <ContactsTextAria
          className={styles.textAriaPosition}
          placeholder={"Что вас интересует?"}
        />

        <Button
          className={styles.formSubmitBtn}
          title={"ОТПРАВИТЬ"}
          ty
          //onClick={}
        />
      </form>
    </div>
  );
}

export default FormContacts;
