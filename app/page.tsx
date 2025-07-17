import Hero from "./components/Hero";
import styles from "./page.module.css";
import PopularCourses from "./components/PopularCourses";
import FeaturesSection from "./components/FeaturesSection";
import AppWalkthrough from "./components/AppWalkthrough";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <PopularCourses />
      <AppWalkthrough />
      <FeaturesSection />
    </div>
  );
}
