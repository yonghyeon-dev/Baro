import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Portfolio />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
