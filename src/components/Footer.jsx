import React from "react";
import logo from "../assets/images/tactic-white.png";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer_sec">
      <div className="autoContent">
        <div className="footer_sec_inner" >
          <div className="footer_top" data-aos="fade-up">
            <div className="footer_content">
              <div className="footer_col footer_about">
                <div className="footer_logo">
                  <img src={logo} alt="Tactics Soft" />
                </div>
                <p className="footer_tagline">
                  Empowering Innovation, Delivering Excellence
                </p>
                <SocialLinks />
              </div>

              <div className="footer_col footer_links">
                <h4>Quick Link</h4>
                <ul>
                  {/* <li><Link to="/courses">Courses</Link></li> */}
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                </ul>
              </div>

              <div className="footer_col footer_contact">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <span className="contact_icon">
                      <svg viewBox="0 0 384 512" fill="currentColor"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                    </span>
                    <p>Gulshan-E-Lahore Block C Gulshan E Lahore, Punjab Pakistan</p>
                  </li>
                  <li>
                    <span className="contact_icon">
                      <svg viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v224c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176L294.4 313.6c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </span>
                    <a href="mailto:contact@tacticssoft.com">contact@tacticssoft.com</a>
                  </li>
                  <li>
                    <span className="contact_icon">
                      <svg viewBox="0 0 512 512" fill="currentColor"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" /></svg>
                    </span>
                    <a href="tel:+923117982030">+92 311 798 2030</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="footer_bottom">
            <p>Copyright @2026, Tactics Soft All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;