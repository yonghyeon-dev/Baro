import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="바로방충망 로고"
          className="hero-logo"
        />
        <h1>프리미엄 인테리어 방충망</h1>
        <p>
          고객의 공간에 품격을 더하는
          <br />
          신뢰의 방충망 전문 시공
        </p>
        <a href="#contact" className="btn">
          상담 문의하기
        </a>
      </div>
    </section>
  );
};

export default Hero;
