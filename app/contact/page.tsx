"use client";

import React, { useState } from "react";
import styles from "../Styles/contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = [
        {
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        },
      ];

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwHgYPV2lyNOta9CbEXH1EH03tzCaKxso-wC513EB_r0YY6vCdyvxJaxmkkaWga6-LO/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.text();
      console.log(result);

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p className={styles.subtitle}>
        Have a question, feedback, or partnership idea? We would love to hear
        from you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            required
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && <p className={styles.success}>{success}</p>}

      <div className={styles.info}>
        <p>
          <strong>Email:</strong> support@olearn.app
        </p>
        <p>
          <strong>Location:</strong> Islamabad, Pakistan
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
