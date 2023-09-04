import React from "react";
import styles from "./contacts.module.css";

function Contacts() {
  const contactsData = [
    {
      id: "1",
      city: "Новороссийск",
      phone: "+7 (923) 465 – 01 – 41",
      email: "digitalPlanetNR@mail.ru",
    },
    {
      id: "2",
      city: "Новороссийск",
      phone: "+7 (923) 465 – 01 – 41",
      email: "digitalPlanetNR@mail.ru",
    },
    {
      id: "3",
      city: "Новороссийск",
      phone: "+7 (923) 465 – 01 – 41",
      email: "digitalPlanetNR@mail.ru",
    },
  ];

  return (
    <ul className={styles.contactsList}>
      {contactsData.map((item) => (
        <li key={item.id} className={styles.contactsItem}>
          <h4 className={styles.contactsCity}>{item.city}</h4>
          <p className={styles.contactsPhone}>{item.phone}</p>
          <p className={styles.contactsEmail}>{item.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
