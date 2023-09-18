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
          <img src={modalCloseBtn} alt="Закрыть" />
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
