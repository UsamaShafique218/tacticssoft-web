import React from "react";
import logo from "../assets/images/tactic-white.png";
import { Link } from "react-router-dom";

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
                <div className="social_links">
                  <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V138.6c0-26 12.7-51.4 53.6-51.4H293V2.9C284.1 1.7 253.5 0 222.4 0 157.2 0 114.6 39.5 114.6 111.3v90.2H28.7v97.8H114.6z" /></svg>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z" /></svg>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141.1c-43.6 0-79 35.4-79 79s35.4 79 79 79 79-35.4 79-79-35.4-79-79-79zm0 130.2c-28.3 0-51.2-22.9-51.2-51.2s22.9-51.2 51.2-51.2 51.2 22.9 51.2 51.2-22.9 51.2-51.2 51.2zm128.8-132.3c-10.2 0-18.5-8.3-18.5-18.5s8.3-18.5 18.5-18.5 18.5 8.3 18.5 18.5-8.3 18.5-18.5 18.5zm58.1 18.5c-2.2-46.2-12.8-87.1-46.7-121-33.8-33.8-74.8-44.4-121-46.7-47.6-2.7-190.4-2.7-238 0-46.2 2.2-87.1 12.8-121 46.7-33.8 33.8-44.4 74.8-46.7 121-2.7 47.6-2.7 190.4 0 238 2.2 46.2 12.8 87.1 46.7 121 33.8 33.8 74.8 44.4 121 46.7 47.6 2.7 190.4 2.7 238 0 46.2-2.2 87.1-12.8 121-46.7 33.8-33.8 44.4-74.8 46.7-121 2.7-47.6 2.7-190.4 0-238zm-46.2 284.1c-10 25.2-29.4 44.6-54.6 54.6-37.8 15-127.7 11.5-168.2 11.5s-130.5 3.4-168.2-11.5c-25.2-10-44.6-29.4-54.6-54.6-15-37.8-11.5-127.7-11.5-168.2s-3.4-130.5 11.5-168.2c10-25.2 29.4-44.6 54.6-54.6 37.8-15 127.7-11.5 168.2-11.5s130.5-3.4 168.2 11.5c25.2 10 44.6 29.4 54.6 54.6 15 37.8 11.5 127.7 11.5 168.2s3.5 130.5-11.5 168.2z" /></svg>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter X">
                    <svg viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                </div>
              </div>

              <div className="footer_col footer_links">
                <h4>Quick Link</h4>
                <ul>
                  <li><Link to="/courses">Courses</Link></li>
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