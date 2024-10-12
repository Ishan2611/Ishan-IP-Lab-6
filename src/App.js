import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Profile from './Profile';
import Courses from './Courses';
import Contact from './Contact';
import Admissions from './Admissions';
import Campus from './Campus';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
