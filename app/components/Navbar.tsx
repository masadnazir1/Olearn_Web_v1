"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../Styles/Navbar.module.css";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="Olearn" width="100" height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <a href="/download" className={styles.downloadButton}>
            Download App
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className={styles.mobileActions}>
          <a href="/download" className={styles.downloadMobile}>
            Download
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.menuToggle}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
