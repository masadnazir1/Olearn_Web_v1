import styles from "../Styles/Signup.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up | Olearn</title>
        <meta
          name="description"
          content="Create your Olearn account to access premium educational content tailored for modern learners."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sign Up - Olearn" />
        <meta
          property="og:description"
          content="Join Olearn and start learning today."
        />
        <meta
          property="og:image"
          content="https://olearn.com/Assets/preview.png"
        />
        <meta property="og:url" content="https://olearn.com/signup" />
        <link rel="canonical" href="https://olearn.com/signup" />
      </Head>

      <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.heading}>Sign up for free</h2>

          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            className={styles.input}
          />

          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />

          <label className={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={styles.input}
          />

          <button type="submit" className={styles.signupBtn}>
            Sign Up
          </button>

          <p className={styles.login}>
            Already have an account? <Link href="/login">Log in</Link>
          </p>

          <button className={styles.downloadBtn}>Download App</button>
        </form>
      </div>
    </>
  );
}
