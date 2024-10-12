import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <style>
        {`
          .header {
            background-color: #f4f4f4; /* Match the background color in app.css */
            padding: 10px 20px; /* Maintain padding for the navbar */
            display: flex; /* Use flexbox for alignment */
            justify-content: space-between; /* Space between logo and nav */
            align-items: center; /* Center items vertically */
            max-width: 1200px; /* Reduce width */
            margin: 0 auto; /* Center the navbar */
            z-index: 1000; /* Ensures the navbar is on top */
          }

          .logo {
            font-size: 24px; /* Adjust logo size */
            color: #333; /* Dark text color to match your requirements */
          }

          .nav-links {
            list-style: none; /* Remove default list styles */
            display: flex; /* Display links in a row */
            margin: 0; /* Remove default margin */
            padding: 0; /* Remove default padding */
          }

          .nav-links li {
            margin: 0 15px; /* Spacing between links */
          }

          .nav-links a {
            text-decoration: none; /* Remove underline from links */
            color: #333; /* Dark text color for links */
            font-size: 16px; /* Font size for links */
            transition: color 0.3s ease; /* Smooth transition for hover effect */
          }

          .nav-links a:hover {
            color: #007bff; /* Change link color on hover */
          }
        `}
      </style>
      <div className="logo">VESIT</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/campus">Campus Life</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
