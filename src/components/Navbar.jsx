import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <img src="/logo.png" alt="바로방충망 로고" className="hero-logo" />

        <ul className="nav-menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">시공사례</a>
          </li>
          <li>
            <a href="#before-after">Before&After</a>
          </li>
          <li>
            <a href="#contact">상담문의</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
