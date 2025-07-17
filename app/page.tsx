import Hero from "./components/Hero";
import styles from "./page.module.css";
import PopularCourses from "./components/PopularCourses";
import FeaturesSection from "./components/FeaturesSection";
import AppWalkthrough from "./components/AppWalkthrough";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olearn – Learn Smarter with Expert-Led Courses</title>
        <meta
          name="description"
          content="Olearn is your platform for high-impact online courses. Master skills in design, development, and more with expert instructors."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="online courses, Olearn, e-learning, design, development, programming"
        />
        <meta property="og:title" content="Olearn – Learn Smarter" />
        <meta
          property="og:description"
          content="Expert-led courses to supercharge your skills."
        />
        <meta
          property="og:image"
          content="https://olearn.com/Assets/preview.png"
        />
        <meta property="og:url" content="https://olearn.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://olearn.com/" />
      </Head>

      <div className={styles.page}>
        <Hero />
        <PopularCourses />
        <AppWalkthrough />
        <FeaturesSection />
      </div>
    </>
  );
}
