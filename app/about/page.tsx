import React from "react";
import styles from "../Styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { CoursesChapters } from "../Utils/Images";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Olearn</title>
        <meta
          name="description"
          content="Learn about Olearn's mission, our vision for modern education, and the team behind the platform."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us – Olearn" />
        <meta
          property="og:description"
          content="Meet the creators of Olearn and discover our journey to revolutionize e-learning."
        />
        <meta
          property="og:image"
          content="https://olearn.com/Assets/preview.png"
        />
        <meta property="og:url" content="https://olearn.com/about" />
        <link rel="canonical" href="https://olearn.com/about" />
      </Head>

      <div className={styles.about}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1>About Olearn</h1>
            <p>
              Olearn is more than a learning platform — it is your personal
              growth partner. We provide high-quality, accessible, and flexible
              learning experiences to help you thrive in your personal and
              professional journey.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={CoursesChapters}
              alt="About Olearn"
              width={500}
              height={400}
              className={styles.heroImage}
              loading="lazy"
            />
          </div>
        </section>

        {/* Our Mission */}
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To democratize education by delivering flexible, expert-led courses
            to learners worldwide. Whether you are starting your first line of
            code, designing your first UI, or preparing for your dream job —
            Olearn is here to guide you every step of the way.
          </p>
        </section>

        {/* Why Olearn */}
        <section className={styles.gridSection}>
          <h2>Why Choose Olearn?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Flexible Learning</h3>
              <p>
                Learn at your own pace, anywhere, anytime. Courses are
                accessible 24/7 across all devices.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Expert Instructors</h3>
              <p>
                Our courses are built by experienced professionals passionate
                about teaching real-world skills.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Career-Focused</h3>
              <p>
                We don’t just teach you concepts — we prepare you for careers
                with practical, portfolio-worthy projects.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Community & Support</h3>
              <p>
                Join a vibrant learning community with peer discussions, mentor
                support, and regular updates.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Start Learning?</h2>
          <p>Explore our courses and take the first step toward your goals.</p>
          <Link href="/courses" className={styles.ctaButton}>
            Browse Courses
          </Link>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
