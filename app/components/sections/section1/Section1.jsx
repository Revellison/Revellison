import React from "react";
import styles from "./Section1.module.css"; 
import DecryptedText from "../../reactbits/DecryptedText/DecryptedText";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Заголовок секции</h1>
      <p className={styles.text}>Текст секции с описанием.</p>
      <button className={styles.button}>Кнопка</button>
    </section>
  );
};

export default Section1;