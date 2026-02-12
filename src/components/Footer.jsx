import React from "react";
import "./Footer.css";
import logo from "../public/logo.png";
import footerImg from "../public/fgfdg.png";
import rectangleImg from "../public/rectangle.png";

export default function Footer(){
  return (
    <footer className="footer">

      {/* TOP IMAGE (150px) */}
      <div
        className="footer-top"
        style={{ backgroundImage: `url(${footerImg})` }}
      />

      {/* BOTTOM IMAGE + CONTENT */}
      <div
        className="footer-bottom"
        style={{ backgroundImage: `url(${rectangleImg})` }}
      >
        <div className="container footer-grid">

          <div>
            <h4>Social</h4>
            <ul>
              <li>Instagram</li>
              <li>Twitter (X)</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>For Colleges</li>
              <li>For Companies</li>
              <li>For Students</li>
              <li>About Us</li>
            </ul>
          </div>

          <div>
            <h4>Contacts</h4>
            <p>Call +91 9876543210</p>
            <p>Email Connect@TalentYug.in</p>
            <p>Bihta, Patna</p>
          </div>

          <div className="footer-brand">
            <img src={logo} alt="TalentYug" />
            {/* <span>TalentYug</span> */}
          </div>

        </div>

        <div className="footer-copy">
          Copyright 2026–27 | All Rights Reserved |
          Privacy Policy | Terms Of Service
        </div>
      </div>

    </footer>
  );
}
