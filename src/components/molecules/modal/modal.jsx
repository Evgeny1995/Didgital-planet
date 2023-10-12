import React, { useEffect, useMemo } from "react";
import styles from "./modal.module.css";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/store/somthingSlice.js";

function Modal() {
  const dispatch = useDispatch();
  const fnModal = useSelector((state) => state.modalshow.value);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    reset();
  };
  console.log(fnModal);
  return (
    <div
      style={{ zIndex: "40" }}
      className={
        fnModal ? [styles.modal, styles.active].join(" ") : styles.modal
      }
      // onClick={() => setActiveModal(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          // onClick={() => setActiveModal(!activeModal)}
          className={styles.modalClose}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <rect
                x="2.36816"
                width="25"
                height="2"
                transform="rotate(45 2.36816 0)"
                fill="#1C1C1C"
              />
              <rect
                x="0.954102"
                y="18"
                width="25"
                height="2"
                transform="rotate(-45 0.954102 18)"
                fill="#1C1C1C"
              />
            </g>
          </svg>
        </button>
        <h4 className={styles.modalTitle}>Закажите VR планетарий</h4>
        <p className={styles.modalText}>
          Оставьте ваши контактные данные, мы обработаем заявку в течении двух
          рабочих дней и перезвоним вам.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            placeholder={"Ваше имя"}
            className={styles.namePosition}
          />
          {errors?.phone && (
            <div className={styles.errorStyle}>{errors.phone.message}</div>
          )}
          <Input
            {...register("phone", {
              required: "Please enter valid number!",
              minLength: {
                value: 6,
                message: "Please enter at least 6 characters!",
              },
              pattern: {
                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                message: "Please enter valide number!",
              },
            })}
            placeholder={"Ваш телефон"}
            className={styles.phonePosition}
          />

          <Button
            onClick={() => setActiveModal(!activeModal)}
            onClick={() => dispatch(showModal())}
            className={styles.formSubmitBtn}
            title={"ОТПРАВИТЬ"}
          />
        </form>
      </div>
    </div>
  );
}
export default Modal;
