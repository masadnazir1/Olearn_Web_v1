import React from "react";
import styles from "../Styles/PopularCourses.module.css";
import { ReactIMG, UiUxIMG, JsIMG } from "../Utils/Images";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    image: ReactIMG,
  },
  {
    id: 2,
    title: "UI/UX Design Essentials",
    category: "Design",
    image: UiUxIMG,
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    category: "Programming",
    image: JsIMG,
  },
];

const PopularCourses = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Popular Courses</h2>
        <p className={styles.subtitle}>
          Upgrade your skills with our trending course catalog.
        </p>
        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={240}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3>{course.title}</h3>
                <p>{course.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
