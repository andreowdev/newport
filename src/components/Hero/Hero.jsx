import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Meu nome é Andreo!</h1>
        <p className={styles.description}>
          Sou um desenvolvedor FullStack, trabalho com as tecnologias Node.js,
           React, MySQL!
        </p>
        <a href="https://api.whatsapp.com/send/?phone=92991784771&text&type=phone_number&app_absent=0" className={styles.contactBtn}>
          Meu Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
