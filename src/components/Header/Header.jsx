import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="lav_logo">
            MotoChowdhury
          </a>
          <div className="nav_menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="uil uil-estate nav_icon"></i>
                  Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon"></i>
                  About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon"></i>
                  Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon"></i>
                  Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav_close"></i>
            <div className="nav_toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};