import React from "react";
import "../index.css";

const BeforeAfter = () => {
  return (
    <section id="before-after" className="section">
      <div className="container">
        <h2>Before & After</h2>
        <div className="before-after-box">
          <div className="before">
            <p>Before</p>
            <img
              src="https://images.unsplash.com/photo-1588850561112-12f661a7f774?auto=format&fit=crop&w=600&q=80"
              alt="시공 전"
            />
          </div>
          <div className="after">
            <p>After</p>
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=600&q=80"
              alt="시공 후"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
