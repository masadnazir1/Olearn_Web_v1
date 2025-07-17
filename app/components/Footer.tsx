import React from "react";
import styles from "../Styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Olearn</h2>
          <p>Empowering your learning journey every day.</p>
        </div>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Olearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
