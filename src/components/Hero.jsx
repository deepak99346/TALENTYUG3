import React from 'react'
import mask from "../public/Mask.png";

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>India's Placement Infrastructure For Tier 2/3 Colleges</h1>
          <p className="lead">70% Placements | 5.5L Average Salary |<br></br> 7-Step Structured Process</p>
          <div className="hero-actions">
            <button className="btn primary">Get Started</button>
          </div>
          <hr className="stats-divider" />
          <ul className="stats">
            <li><strong>1M+</strong> Students <br></br>Annual Unemployed</li>
            <li><strong>70%</strong> <br></br> Success Rate</li>
            <li><strong>500Cr</strong> <br></br>Markets</li>
          </ul>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <img src={mask} alt="campus" height="80px" />
          </div>
        </div>
      </div>
    </section>
  )
}
