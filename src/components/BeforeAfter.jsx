import React from "react";
import "../index.css";

const BeforeAfter = () => (
  <section id="before-after" className="section">
    <div className="container">
      <h2>시공 Before & After</h2>
      <div className="before-after-box">
        <div>
          <p>시공 전</p>
          <img
            src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="시공 전 인테리어"
          />
        </div>
        <div>
          <p>시공 후</p>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="시공 후 인테리어"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
