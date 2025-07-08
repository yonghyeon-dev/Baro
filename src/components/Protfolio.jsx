import React from "react";
import "../index.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>시공사례</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80"
              alt="현관문 슬라이딩 방충망"
            />
            <div className="card-text">현관문 슬라이딩 방충망</div>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
              alt="창문 이중 방충망 시공"
            />
            <div className="card-text">창문 이중 방충망 시공</div>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="아파트 거실 방충망 시공"
            />
            <div className="card-text">아파트 거실 방충망 시공</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
