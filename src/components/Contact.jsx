import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>상담문의</h2>
        <ul className="contact-list">
          <li>
            <a href="tel:01030517896">📞 전화문의: 010-3051-7896</a>
          </li>
          <li>
            <a href="mailto:yonselmilk@naver.com">
              📧 이메일: yonselmilk@naver.com
            </a>
          </li>
          <li>
            <a
              href="https://m.blog.naver.com/baro_screen?tab=1"
              target="_blank"
              rel="noreferrer"
            >
              📝 블로그
            </a>
          </li>
          <li>
            <a
              href="https://open.kakao.com/o/somechatlink"
              target="_blank"
              rel="noreferrer"
            >
              💬 카카오톡 문의
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/baro_screen"
              target="_blank"
              rel="noreferrer"
            >
              📷 인스타그램
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
