import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>MERN Testing & Debugging Application</h1>
        <p>A production-ready MERN stack application with comprehensive testing</p>
      </header>
      
      <div className="home-content">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🧪 Complete Test Coverage</h3>
            <p>Unit, integration, and end-to-end tests with Jest and Cypress</p>
          </div>
          
          <div className="feature-card">
            <h3>🐛 Advanced Debugging</h3>
            <p>Error boundaries, logging strategies, and performance monitoring</p>
          </div>
          
          <div className="feature-card">
            <h3>🔒 Secure Authentication</h3>
            <p>JWT-based auth with bcrypt password hashing</p>
          </div>
          
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Mobile-first UI with modern CSS</p>
          </div>
        </div>
        
        <div className="home-actions">
          <Link to="/login" className="btn btn-primary btn-lg">
            Get Started
          </Link>
          <Link to="/register" className="btn btn-secondary btn-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
