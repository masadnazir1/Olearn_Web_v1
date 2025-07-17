"use client";
import React from "react";
import Link from "next/link";
import styles from "./Styles/notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link href="/">
        <button className={styles.homeButton}>Go Back Home</button>
      </Link>
    </div>
  );
}
