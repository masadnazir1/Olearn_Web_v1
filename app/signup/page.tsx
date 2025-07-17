import styles from "../Styles/Signup.module.css";
import Link from "next/link";

export default function Signup() {
  return (
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
  );
}
