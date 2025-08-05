import React from 'react';
import { FaGraduationCap, FaCode, FaFire, FaChartLine, FaDatabase } from 'react-icons/fa';
import './Education.css';

// Direct public folder paths
const SchoolLogo = '/Logos/UJlogo.png';
const ResebankLogo = '/Logos/Vutlogo.jpg';
const DefaultLogo = '/Logos/default-logo.png';

const Education = () => {
  return (
    <div className="education-scroll-container">
      <div className="education-center-wrapper">
        <h1 className="education-title">My Education Journey</h1>
        
        <div className="timeline-container">
          {/* Vertical connecting line */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          <div className="timeline-items">
            {/* Co-Lead Developer */}
            <div className="timeline-item">
              <div className="logo-container">
                <img 
                  src={SchoolLogo}
                  alt="School Project" 
                  className="institution-logo" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DefaultLogo;
                  }}
                />
              </div>
              <div className="timeline-card left">
                <div className="card-header">
                  <FaCode className="link-icon" />
                  <h2>Co-Lead Developer – Krippy Box Project</h2>
                </div>
                <div className="card-subheader">
                  <FaGraduationCap className="sub-icon" />
                  <span>School Project</span>
                  <span className="divider">•</span>
                  <span>2024 (March - Nov)</span>
                </div>
                <ul className="card-list">
                  <li>
                    <FaFire className="list-icon fire-icon" />
                    <span>Built with FlutterFlow & Firebase</span>
                  </li>
                  <li>
                    <FaChartLine className="list-icon success-icon" />
                    <span>Boosted engagement by 30%</span>
                  </li>
                  <li>
                    <FaChartLine className="list-icon danger-icon" />
                    <span>Reduced user drop-off by 40%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diploma in IT */}
            <div className="timeline-item">
              <div className="logo-container">
                <img 
                  src={ResebankLogo}
                  alt="Resebank College" 
                  className="institution-logo" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DefaultLogo;
                  }}
                />
              </div>
              <div className="timeline-card right">
                <div className="card-header">
                  <FaGraduationCap className="link-icon" />
                  <h2>Diploma in IT (Software Development)</h2>
                </div>
                <div className="card-subheader">
                  <FaGraduationCap className="sub-icon" />
                  <span>Resebank College</span>
                  <span className="divider">•</span>
                  <span>2022 – 2024</span>
                </div>
                <ul className="card-list">
                  <li className="highlight-item">
                    <span>22 Distinctions</span>
                  </li>
                  <li>
                    <span className="bold-text">GPA:</span>
                    <span>3.9/4.0</span>
                  </li>
                  <li>
                    <FaDatabase className="list-icon db-icon" />
                    <span>Focus: Software Development, System Analysis & Database Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;