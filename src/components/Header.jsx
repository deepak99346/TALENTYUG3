import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${shrink ? "navbar--shrink" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-brand">
          <img src={logo} alt="TalentYug Logo" />
          {/* <span className="brand-text">TalentYug</span> */}
        </div>

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#colleges">COLLEGES</a>
          <a href="#companies">COMPANIES</a>
          <a href="#students">STUDENTS</a>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>

      </div>
    </header>
  );
}
