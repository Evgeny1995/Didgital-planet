import React from "react";
import styles from "./modal.module.css";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import modalCloseBtn from "./../../../assets/svg/modalClose.svg";

function Modal({ activeModal, setActiveModal }) {
  return (
    <div
      className={
        activeModal ? [styles.modal, styles.active].join(" ") : styles.modal
      }
      onClick={() => setActiveModal(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setActiveModal(!activeModal)}
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
        <Input placeholder={"Ваше имя"} className={styles.namePosition} />
        <Input placeholder={"Ваш телефон"} className={styles.phonePosition} />
        <Button
          onClick={() => setActiveModal(!activeModal)}
          className={styles.formSubmitBtn}
          title={"ОТПРАВИТЬ"}
        />
      </div>
    </div>
  );
}
export default Modal;
