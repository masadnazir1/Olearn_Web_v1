"use client";

import React, { useState, useEffect } from "react";
import styles from "../Styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  HeroSHow,
  Categories,
  CoursesChapters,
  PlayerIMg,
  Certificate,
  AccountManage,
} from "../Utils/Images";

const imageArray = [
  HeroSHow,
  CoursesChapters,
  PlayerIMg,
  Certificate,
  AccountManage,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 300); // delay before image swap
    }, 4000); // cycle every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Learn Fast. <br />
            Learn Smart. <span className={styles.highlight}>Olearn</span>
          </h1>
          <p className={styles.subtitle}>
            Empower yourself with top-quality courses, designed for speed,
            impact, and clarity.
          </p>
          <div className={styles.actions}>
            <Link href="/courses" className={styles.primaryBtn}>
              Browse Courses
            </Link>
            <Link href="/download" className={styles.secondaryBtn}>
              Download App
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className={styles.imageWrapper}>
          <Image
            key={currentIndex}
            src={imageArray[currentIndex]}
            alt="App Preview"
            width={500}
            height={500}
            className={`${styles.heroImage} ${
              fade ? styles.fadeIn : styles.fadeOut
            }`}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
