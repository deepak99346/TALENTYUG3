import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import "./Header.css";

export default function Header() {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== SHRINK ON SCROLL ===== */
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== CLOSE MENU WHEN LINK CLICKED (MOBILE UX) ===== */
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
  <header className={`navbar ${shrink ? "navbar--shrink" : ""}`}>
    <div className="navbar-container">

      {/* ===== LOGO ===== */}
      <div className="navbar-brand">
        <img src={logo} alt="TalentYug Logo" />
      </div>

      {/* ===== HAMBURGER ===== */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ===== NAVIGATION + ACTIONS (MOBILE DROPDOWN) ===== */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <nav className="navbar-menu">
          <a href="#colleges" onClick={handleLinkClick}>COLLEGES</a>
          <a href="#companies" onClick={handleLinkClick}>COMPANIES</a>
          <a href="#students" onClick={handleLinkClick}>STUDENTS</a>
        </nav>

        {/* Buttons inside dropdown */}
        <div className="mobile-actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>

      </div>

      {/* ===== DESKTOP BUTTONS ===== */}
      <div className="navbar-actions desktop-actions">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Register</button>
      </div>

    </div>
  </header>
);

}
