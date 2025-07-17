import React from "react";
import styles from "../Styles/FeaturesSection.module.css";
import { Clock, GraduationCap, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Flexibility",
    description:
      "Learn on your own schedule, with courses available 24/7 on any device.",
    icon: <Clock size={32} strokeWidth={1.5} />,
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry experts and experienced educators who are passionate about teaching.",
    icon: <GraduationCap size={32} strokeWidth={1.5} />,
  },
  {
    title: "Wide Range of Courses",
    description:
      "Explore a diverse catalog of courses covering a wide range of subjects, from coding to creative writing.",
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Learn at Your Own Pace</h2>
        <p className={styles.subheading}>
          Olearn offers a flexible learning experience that fits your busy
          lifestyle. Access courses anytime, anywhere, and learn at your own
          pace.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
