import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}>
        <img
          src="https://preview.colorlib.com/theme/shop/img/header-img.png"
          alt=""
        />
      </div>
      <div className={styles.heroContent}>
        <span>Flat 75%Off</span>
        <p>IT’S HAPPENING THIS SEASON!</p>
        <button>PURCHASE NOW</button>
      </div>
    </div>
  );
}
