import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <h1 className="logo">AI Quiz Generator</h1>
        <Link to="/quiz" className="start-btn">
          Start Quiz
        </Link>
      </nav>
      <div className="hero">
        <h2>Test Your Knowledge with AI</h2>
        <p>
          Choose a topic, select a difficulty, and let AI generate a unique quiz
          for you!
        </p>
        <Link to="/quiz" className="cta-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}
