"use client";

import Image from "next/image";
import styles from "../Styles/walkthrough.module.css";
import {
  Categories,
  CoursesChapters,
  PlayerIMg,
  AccountManage,
  Certificate,
} from "../Utils/Images";

const walkthroughData = [
  {
    title: "Discover Top Courses",
    description:
      "Browse recommended, trending, and categorized courses right on your home screen.",
    image: Categories,
    bg: "#f2f7f4",
  },
  {
    title: "Dive Into the Course",
    description:
      "Access detailed course screens with chapter breakdowns and clear progress tracking.",
    image: CoursesChapters,
    bg: "#fef1ed",
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Play video lessons with chapter navigation and resume support anytime, anywhere.",
    image: PlayerIMg,
    bg: "#fdf6f0",
  },
  {
    title: "Manage Your Account",
    description:
      "Easily access your profile, enrolled courses, and app settings in one place.",
    image: AccountManage,
    bg: "#edf3fa",
  },
  {
    title: "Earn Verified Certificates",
    description:
      "Complete courses and download beautiful, personalized certificates of completion.",
    image: Certificate,
    bg: "#f2f0ff",
  },
];

export default function AppWalkthrough() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Start Learning Today</h2>

      <div className={styles.grid}>
        {walkthroughData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: item.bg }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.title}
                className={styles.image}
                fill
              />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
