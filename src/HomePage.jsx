import React from 'react';
import collegeImage from './assets/college.jpg'; // Ensure this path is correct

function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img src={collegeImage} alt="College" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Vivekanand Education Society's Institute of Technology</h1>
          <p>Your future starts here. Discover our programs, campus, and vibrant community.</p>
          <button className="cta-button">Explore Programs</button>
        </div>
      </div>

      <section className="about-section">
        <h2>About Us</h2>
        <p>VESIT is a premier institution dedicated to academic excellence and personal growth. We offer a wide variety of programs designed to empower students to succeed in today’s competitive world.</p>
      </section>

      <section className="statistics">
        <div className="stat-card">
          <h3>100+</h3>
          <p>Programs Offered</p>
        </div>
        <div className="stat-card">
          <h3>5000+</h3>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-card">
          <h3>90%</h3>
          <p>Graduation Rate</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
