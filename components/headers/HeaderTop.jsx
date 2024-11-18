import React from "react";

export default function HeaderTop() {
  return (
    <div className="header-top-section style1 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:contact@ariyanislamraj.com" className="link">
                contact@ariyanislamraj.com
              </a>
            </li>
            <li>
              <i className="fa-regular fa-heart" />
              <a href="tel:+8801839600629">+8801839600629</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://facebook.com/ariyanislamraj2030">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://linkedin.com/in/ariyan-islam-raj1">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
