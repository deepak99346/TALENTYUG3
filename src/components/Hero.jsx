import React, { useState, useEffect } from "react";
import mask from "../public/Mask.png";
import d1 from "../public/d1.png";
import d2 from "../public/d2.png";
import d3 from "../public/d3.png";
import d4 from "../public/d4.png";
import "./Hero.css";

export default function Hero() {
  const images = [mask, d1, d2, d3, d4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto slide every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]); // small fix for React warning

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>India's Placement Infrastructure For Tier 2/3 Colleges</h1>

          <p className="lead">
            70% Placements | 5.5L Average Salary | <br />
            7-Step Structured Process
          </p>

          <div className="hero-actions">
            <button className="btn primary">Get Started</button>
          </div>

          <hr className="stats-divider" />

          <ul className="stats">
            <li><strong>1M+</strong> Students <br />Annual Unemployed</li>
            <li><strong>70%</strong> <br /> Success Rate</li>
            <li><strong>500Cr</strong> <br /> Markets</li>
          </ul>
        </div>

        {/* Right image slider */}
        <div className="hero-right">
          <div className="hero-card">
            <img src={images[currentIndex]} alt="campus" />
          </div>

          {/* ✅ Dots indicator */}
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
