import React, { useState } from "react";
import styles from "./pagesFive.module.css";
import Accardion from "../../../molecules/accardion/accardion.jsx";

const PagesFive = () => {


  return (
    <div className={styles.pagesFiveContainer}>
      <div className={styles.pagesFiveContent}>
        <div className={styles.titleBorder}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        </div>
        <Accardion  />
      </div>
    </div>
  );
};

export default PagesFive;
